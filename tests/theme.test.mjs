import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../src/theme.js',import.meta.url),'utf8');
function setup(saved, blocked = false) {
  const handlers = {};
  const toggle = {setAttribute:(key,value) => {toggle[key]=value;},addEventListener:(type,fn) => {handlers[type] = fn;}};
  const meta = {};
  const root = {dataset:{}};
  const system = {matches:true,addEventListener:(_,fn) => {system.change = fn;}};
  const store = new Map(saved ? [['vokal.theme',saved]] : []);
  vm.runInNewContext(source,{
    document:{documentElement:root,querySelector:s => s === '#theme-toggle' ? toggle : meta},
    matchMedia:() => system,
    localStorage:{getItem:key => {if(blocked) throw Error('blocked');return store.get(key);},setItem:(key,value) => {if(blocked) throw Error('blocked');store.set(key,value);}},
  });
  return {root,toggle,system,store,meta,click:() => handlers.click()};
}
test('un botón sigue al sistema hasta elegir y alterna tema con nombre accesible', () => {
  const app = setup();
  assert.equal(app.root.dataset.theme,'dark');
  assert.equal(app.toggle['aria-label'],'Activar modo claro');
  app.system.matches=false;app.system.change();
  assert.equal(app.root.dataset.theme,'light');
  app.click();
  assert.equal(app.root.dataset.theme,'dark');
  assert.equal(app.store.get('vokal.theme'),'dark');
  assert.equal(app.toggle['aria-label'],'Activar modo claro');
  app.system.change();assert.equal(app.root.dataset.theme,'dark');
  app.click();assert.equal(app.root.dataset.theme,'light');
  assert.equal(app.toggle['aria-label'],'Activar modo oscuro');
});
test('conserva preferencias antiguas y alterna sin almacenamiento disponible', () => {
  assert.equal(setup('light').root.dataset.theme,'light');
  assert.equal(setup('system').root.dataset.theme,'dark');
  const blocked = setup(null,true);
  blocked.click();assert.equal(blocked.root.dataset.theme,'light');
});
test('texto, acentos y botones alcanzan contraste 4.5:1 en ambas paletas', () => {
  const css = readFileSync(new URL('../src/theme.css',import.meta.url),'utf8');
  const blocks = [...css.matchAll(/\{([^{}]+)\}/g)].map(match => Object.fromEntries([...match[1].matchAll(/--([\w-]+):\s*(#[a-f0-9]{6})/gi)].map(m => [m[1],m[2]]))).filter(block => block.bg);
  function light(hex) {
    const c = hex.slice(1).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045 ? v/12.92 : ((v+.055)/1.055)**2.4);
    return c[0]*.2126+c[1]*.7152+c[2]*.0722;
  }
  assert.equal(blocks.length,3);
  for (const block of blocks) {
    const colors = {...blocks[0],...block};
    for (const [a,b] of [['ink','bg'],['muted','surface'],['accent','bg'],['on-accent','accent'],['button-ink','button-bg'],['hero-text','hero'],['hero-ink','hero'],['gold','surface'],['hero-button-ink','hero-accent'],['correct-ink','correct-bg'],['retry-ink','retry-bg']]) {
      const x=light(colors[a]),y=light(colors[b]);
      assert.ok((Math.max(x,y)+.05)/(Math.min(x,y)+.05)>=4.5,`${block.bg}: ${a}/${b}`);
    }
  }
});

test('la tarjeta principal tiene superficies y texto propios para ambos temas', () => {
  const css = readFileSync(new URL('../src/theme.css',import.meta.url),'utf8');
  const blocks = [...css.matchAll(/\{([^{}]+)\}/g)].map(m => m[1]).filter(b => b.includes('--bg:'));
  for(const block of blocks) {
    for(const token of ['hero','hero-ink','hero-text','hero-accent','hero-button-ink'])
      assert.match(block,new RegExp('--'+token+':#[a-f0-9]{6}'));
  }
  assert.notEqual(blocks[0].match(/--hero:(#[a-f0-9]{6})/)[1],blocks[2].match(/--hero:(#[a-f0-9]{6})/)[1]);
});
