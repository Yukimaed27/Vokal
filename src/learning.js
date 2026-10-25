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
  return { streak, due: now + (correct ? intervals[streak] * DAY : 600000) };
}
export function dueWords(words, reviews, now = Date.now()) {
  return words.filter(word => reviews[word.id] && reviews[word.id].due <= now);
}
export function readState(raw, lessonIds, wordIds) {
  const empty = { completed: [], reviews: {}, assessment: null };
  if (!raw) return empty;
  const data = JSON.parse(raw);
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Invalid progress');
  const completed = Array.isArray(data.completed) ? [...new Set(data.completed.filter(id => lessonIds.includes(id)))] : [];
  const reviews = {};
  for (const id of wordIds) {
    const item = data.reviews?.[id];
    if (item && Number.isInteger(item.streak) && item.streak >= 0 && item.streak <= 6 && Number.isFinite(item.due) && item.due >= 0) reviews[id] = { streak: item.streak, due: item.due };
  }
  const a = data.assessment;
  const assessment = a && Number.isInteger(a.score) && Number.isInteger(a.total) && a.total > 0 && a.score >= 0 && a.score <= a.total ? { score:a.score, total:a.total } : null;
  return {completed, reviews, assessment};
}
