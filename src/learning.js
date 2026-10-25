export const DAY = 86400000;
export function normalize(value) {
  return String(value).trim().normalize('NFC').toLocaleLowerCase('de-DE').replace(/[.!?]+$/u, '').replace(/\s+/gu, ' ');
}
export function isCorrect(value, answers) {
  return answers.some(answer => normalize(answer) === normalize(value));
}
export function schedule(previous, correct, now = Date.now()) {
  const streak = correct ? Math.min((previous?.streak ?? 0) + 1, 6) : 0;
  const intervals = [0, 1, 3, 7, 14, 30, 60];
  return { streak, due: now + (correct ? intervals[streak] * DAY : 600000), updatedAt: now };
}
export function dueWords(words, reviews, now = Date.now()) {
  return words.filter(word => reviews[word.id] && reviews[word.id].due <= now);
}
export function readState(raw, lessonIds, wordIds, unitIds = []) {
  const empty = { completed: [], reviews: {}, assessment: null, results: {}, assessments: {} };
  if (!raw) return empty;
  const data = JSON.parse(raw);
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Invalid progress');
  const completed = Array.isArray(data.completed) ? [...new Set(data.completed.filter(id => lessonIds.includes(id)))] : [];
  const reviews = {};
  for (const id of wordIds) {
    const item = data.reviews?.[id];
    if (item && Number.isInteger(item.streak) && item.streak >= 0 && item.streak <= 6 && Number.isFinite(item.due) && item.due >= 0) reviews[id] = { streak: item.streak, due: item.due, updatedAt: Number.isFinite(item.updatedAt) ? Math.max(0, item.updatedAt) : 0 };
  }
  const a = data.assessment;
  const assessment = a && Number.isInteger(a.score) && Number.isInteger(a.total) && a.total > 0 && a.score >= 0 && a.score <= a.total ? { score:a.score, total:a.total } : null;
  const cleanScores = (scores, ids) => Object.fromEntries(ids.flatMap(id => {
    const score = scores?.[id];
    return score && Number.isInteger(score.score) && Number.isInteger(score.total) && score.total > 0 && score.score >= 0 && score.score <= score.total && Number.isFinite(score.updatedAt) && score.updatedAt >= 0 ? [[id, {score:score.score,total:score.total,updatedAt:score.updatedAt}]] : [];
  }));
  return {completed, reviews, assessment, results:cleanScores(data.results, lessonIds), assessments:cleanScores(data.assessments, unitIds)};
}

export function mergeProgress(left, right) {
  const mergeMap = (a = {}, b = {}) => {
    const merged = {...a};
    for (const [id, value] of Object.entries(b)) {
      if (!merged[id] || (value.updatedAt ?? 0) > (merged[id].updatedAt ?? 0)) merged[id] = value;
    }
    return merged;
  };
  return {
    completed:[...new Set([...left.completed, ...right.completed])].sort(),
    reviews:mergeMap(left.reviews, right.reviews),
    assessment:right.assessment ?? left.assessment,
    results:mergeMap(left.results, right.results),
    assessments:mergeMap(left.assessments, right.assessments),
  };
}

export function unitUnlocked(unitId, units, lessons, completed) {
  const index = units.findIndex(unit => unit.id === unitId);
  if (index < 0) return false;
  if (index === 0) return true;
  const previousLessons = lessons.filter(lesson => units.slice(0,index).some(unit => unit.id === lesson.unit));
  return previousLessons.every(lesson => completed.includes(lesson.id));
}

export function lessonQuestions(lesson) {
  const meanings = lesson.words.map(word => word[2]);
  const recognition = lesson.words.map(([id, de, es], index) => {
    const choices = [...new Set([es, meanings[(index + 1) % meanings.length], meanings[(index + 4) % meanings.length]])];
    const offset = index % choices.length;
    return {prompt:`¿Qué significa «${de}»?`,options:[...choices.slice(offset),...choices.slice(0,offset)],answers:[es],explanation:`${de}: ${es}. Observa cómo se usa en el ejemplo de la lección.`,wordId:id};
  });
  const production = lesson.words.map(([id,de,es,example]) => ({
    prompt:`Recuerda la palabra o expresión de esta lección para «${es}». Incluye el artículo si lo aprendiste.`,
    answers:[de], explanation:`La expresión objetivo es «${de}». Ejemplo: ${example}`,wordId:id,
  }));
  return [...lesson.questions, ...recognition, ...production];
}

export function assessmentQuestions(lesson) {
  const linked = lessonQuestions(lesson).filter(question => question.wordId);
  return [...lesson.questions,...linked.slice(0,3),...linked.slice(-3)];
}
