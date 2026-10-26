"""Build the pinned, licensed German-Spanish catalog without third-party packages."""
import argparse
import hashlib
import io
import json
from pathlib import Path
import re
import tarfile
import tempfile
import unicodedata
import urllib.request
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DICTIONARY_URL = 'https://download.freedict.org/dictionaries/deu-spa/2025.11.23/freedict-deu-spa-2025.11.23.src.tar.xz'
DICTIONARY_SHA512 = '37d5e623cf6c8ccb419d85b463953ec91577013a1737771895521f6d0fc5a5ed3e9253ae9b5e80faae1d8124d9b2c1efd65e65a3e3754289f56ea966df50b028'
FREQUENCY_URL = 'https://raw.githubusercontent.com/hermitdave/FrequencyWords/072bbed282316a23651aa7068c7173aa7898cf80/content/2018/de/de_50k.txt'
FREQUENCY_SHA256 = 'd9e50546fd7e8b6fe6542a2b33c51d1331092b2a3916ec09f80d97856068705b'
NS = {'t': 'http://www.tei-c.org/ns/1.0'}
LANG = '{http://www.w3.org/XML/1998/namespace}lang'
WORD = re.compile(r'^[^\W\d_]+(?:-[^\W\d_]+)*$', re.UNICODE)
PERSON = re.compile(r'\b(?:Vorname|Familienname|Nachname|Eigenname|Ortsname|Flussname)\b', re.I)
PLACE = re.compile(r'^(?:Geographie[^:]*:\s*)?(?:Stadt|Hauptstadt|Hafenstadt|Gemeinde|Dorf|Fluss|Bundesland|Republik|Staat|Insel|Land|Kontinent)\b', re.I)
INFLECTION = re.compile(r'\b(?:Flexionsform|Pluralform|Genitivform|Dativform|Akkusativform|konjugierte Form|flektierte Form|Partizip|Komparativ|Superlativ)\b', re.I)
REGISTER = re.compile(r'vulgär|vulgar|beleidigend|abwertend|obszön|derb', re.I)
POS_ORDER = {'v': 0, 'adj': 1, 'adv': 2, 'n': 3}
NOMINALIZED_FUNCTION_WORDS = {'ich','du','er','sie','es','wir','ihr','ja','nein','aber','und','oder','für','wider','wenn','wie','was','dass','daß','ob','bitte','danke','wer','dies','das','jeder','keiner'}


def text(element):
    return unicodedata.normalize('NFC', ' '.join(''.join(element.itertext()).split()))


def download(url, expected, algorithm, local=None):
    if local:
        data = Path(local).read_bytes()
    else:
        cache = Path(tempfile.gettempdir()) / 'vokal-vocabulary-sources'
        cache.mkdir(exist_ok=True)
        target = cache / url.rsplit('/', 1)[1]
        if target.exists():
            data = target.read_bytes()
        else:
            request = urllib.request.Request(url, headers={'User-Agent': 'Vokal vocabulary importer'})
            with urllib.request.urlopen(request, timeout=60) as response:
                data = response.read(20_000_001)
            if len(data) > 20_000_000:
                raise ValueError('Source exceeds expected size')
            if hashlib.new(algorithm, data).hexdigest() != expected:
                raise ValueError('Source checksum mismatch')
            target.write_bytes(data)
    if hashlib.new(algorithm, data).hexdigest() != expected:
        raise ValueError('Source checksum mismatch')
    return data


def extract(dictionary, frequency, count):
    ranks = {line.split()[0]: rank for rank, line in enumerate(frequency.decode('utf-8').splitlines(), 1) if len(line.split()) == 2}
    with tarfile.open(fileobj=io.BytesIO(dictionary), mode='r:xz') as archive:
        member = next(m for m in archive.getmembers() if m.isfile() and m.name.endswith('deu-spa.tei'))
        if member.size > 50_000_000:
            raise ValueError('Unexpected XML size')
        # Read the member in memory; never extract archive paths onto the filesystem.
        root = ET.fromstring(archive.extractfile(member).read())
    candidates = {}
    for entry in root.findall('.//t:body/t:entry', NS):
        lemma = unicodedata.normalize('NFC', entry.findtext('t:form/t:orth', '', NS).strip())
        key = lemma.lower()
        pos = entry.findtext('t:gramGrp/t:pos', '', NS)
        gender = entry.findtext('t:gramGrp/t:gen', '', NS)
        if pos not in POS_ORDER or not WORD.fullmatch(lemma) or not 2 <= len(lemma) <= 28 or lemma.isupper() or key not in ranks:
            continue
        if pos == 'n' and gender not in {'masc', 'fem', 'neut'}:
            continue
        if pos == 'n' and key in NOMINALIZED_FUNCTION_WORDS:
            continue
        usage = ' '.join(text(e) for e in entry.findall('.//t:usg', NS))
        if REGISTER.search(usage):
            continue
        senses = []
        for sense in entry.findall('t:sense', NS):
            definitions = [text(e) for e in sense.findall('.//t:def', NS)]
            if any(PERSON.search(d) or PLACE.search(d) or INFLECTION.search(d) for d in definitions):
                continue
            translations = []
            for citation in sense.findall('t:cit', NS):
                if citation.get('type') != 'trans' or citation.get(LANG) != 'es':
                    continue
                for quote in citation.findall('t:quote', NS):
                    value = text(quote)
                    if 1 <= len(value) <= 100 and not re.search(r'[<>{}\[\]]', value) and value not in translations:
                        translations.append(value)
            if translations:
                senses.append({'translations': translations[:4], 'definitions': [d[:300] for d in definitions[:2]]})
        if not senses:
            continue
        value = {'lemma': lemma, 'pos': pos, 'gender': gender if pos == 'n' else '', 'rank': ranks[key], 'senses': senses[:3]}
        previous = candidates.get(key)
        if not previous or POS_ORDER[pos] < POS_ORDER[previous['pos']]:
            candidates[key] = value
        elif previous['pos'] == pos:
            for sense in senses:
                if sense not in previous['senses'] and len(previous['senses']) < 3:
                    previous['senses'].append(sense)
    selected = sorted(candidates.values(), key=lambda item: (item['rank'], item['lemma']))[:count]
    if len(selected) != count or len({row['lemma'].lower() for row in selected}) != count:
        raise ValueError(f'Expected {count} unique lemmas, found {len(selected)}')
    return selected


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--dictionary', help='Optional already-downloaded source archive; checksum still enforced')
    parser.add_argument('--frequency', help='Optional already-downloaded frequency text; checksum still enforced')
    args = parser.parse_args()
    dictionary = download(DICTIONARY_URL, DICTIONARY_SHA512, 'sha512', args.dictionary)
    frequency = download(FREQUENCY_URL, FREQUENCY_SHA256, 'sha256', args.frequency)
    selected = extract(dictionary, frequency, 5000)
    lines = [json.dumps(row, ensure_ascii=False, separators=(',', ':')) for row in selected]
    output = '// Generated by scripts/import-vocabulary.py. Catalog adaptation: CC BY-SA 4.0. See docs/VOCABULARY_SOURCES.md.\nexport const dictionaryEntries = [\n' + ',\n'.join(lines) + '\n];\n'
    (ROOT / 'src/vocabulary-data.js').write_text(output, encoding='utf-8', newline='\n')
    print(json.dumps({'lemmas': len(selected), 'byPos': {pos: sum(w['pos'] == pos for w in selected) for pos in POS_ORDER}, 'bytes': len(output.encode('utf-8')), 'review': 'pending'}, ensure_ascii=True))


if __name__ == '__main__':
    main()
