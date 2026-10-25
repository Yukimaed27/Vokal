// Browser QA without third-party packages. Start a disposable Chromium profile on port 9223 first.
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {lessons} from '../src/content.js';
import {lessonQuestions,assessmentQuestions} from '../src/learning.js';
const endpoint = 'http://127.0.0.1:9223';
let target;
for (let attempt=0; attempt<30; attempt++) {
  try {target = await (await fetch(`${endpoint}/json/new?about:blank`,{method:'PUT'})).json();break;}
  catch {await new Promise(resolve => setTimeout(resolve,100));}
}
if (!target) throw new Error('Start a disposable Chromium browser with --remote-debugging-port=9223.');
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve,reject) => {socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
let sequence = 0;
const waiting = new Map();
const errors = [];
socket.addEventListener('message',event => {
  const message = JSON.parse(event.data);
  if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.text);
  const request = waiting.get(message.id);
  if (request) {waiting.delete(message.id);clearTimeout(request.timer);message.error ? request.reject(new Error(JSON.stringify(message.error))) : request.resolve(message.result);}
});
function send(method,params = {}) {
  return new Promise((resolve,reject) => {
    const id = ++sequence;
    const timer = setTimeout(() => {waiting.delete(id);reject(new Error(`CDP timeout: ${method}`));},15000);
    waiting.set(id,{resolve,reject,timer});socket.send(JSON.stringify({id,method,params}));
  });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description ?? result.exceptionDetails.text);
  return result.result.value;
}
async function go(hash) {
  await evaluate(`location.hash = ${JSON.stringify(hash)};new Promise(r=>setTimeout(r,30))`);
}
async function start(action) {
  assert.ok(await evaluate(`!!document.querySelector('[data-action="${action}"]')`),`Missing action ${action}`);
  await evaluate(`document.querySelector('[data-action="${action}"]').click();new Promise(r=>setTimeout(r,30))`);
}
async function answerAll(questions,correct = true) {
  for (const question of questions) {
    const answer = correct ? question.answers[0] : question.options?.find(o => !question.answers.includes(o)) ?? 'incorrecto';
    await evaluate(`(() => {
      const form = document.querySelector('#answer-form');
      if (!form) throw new Error('Expected an active exercise');
      const options = [...form.querySelectorAll('input[type=radio]')];
      if (options.length) options.find(o=>o.value===${JSON.stringify(answer)}).checked = true;
      else form.elements.answer.value = ${JSON.stringify(answer)};
      form.requestSubmit();
      if (!document.querySelector('[data-action=next]')) throw new Error('No feedback after submitting');
      if (document.activeElement !== document.querySelector('[data-action=next]')) throw new Error('Feedback focus lost');
      document.querySelector('[data-action=next]').click();
    })()`);
  }
}
function contrast(a,b) {
  const luminance = hex => {
    const rgb = hex.replace('#','').match(/../g).map(x => parseInt(x,16)/255).map(x=>x<=.04045 ? x/12.92 : ((x+.055)/1.055)**2.4);
    return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;
  };
  const x = luminance(a), y = luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);
}
try {
  await send('Page.enable');await send('Runtime.enable');
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-color-scheme',value:'dark'},{name:'prefers-reduced-motion',value:'reduce'}]});
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://localhost:3000/'});
  for (let attempt=0;attempt<30;attempt++) {
    if (await evaluate('!!document.querySelector("main h1")')) break;
    await evaluate('new Promise(r=>setTimeout(r,100))');
  }
  assert.equal(await evaluate('document.documentElement.dataset.theme'),'dark');
  await evaluate('document.querySelector("#theme-toggle").click()');
  assert.equal(await evaluate('document.documentElement.dataset.theme'),'light');
  await evaluate('document.querySelector("#theme-select").value="system";document.querySelector("#theme-select").dispatchEvent(new Event("change"))');
  assert.equal(await evaluate('document.documentElement.dataset.theme'),'dark');
  await go('leccion/tiempo');assert.match(await evaluate('document.querySelector("main").textContent'),/Esta sección se abre después/);
  await go('leccion/saludos');await start('practice:saludos');await answerAll(lessonQuestions(lessons[0]));
  assert.match(await evaluate('document.querySelector("main").textContent'),/Contenido marcado como dominado/);
  assert.deepEqual(await evaluate('JSON.parse(localStorage.getItem("vokal.progress.v1")).completed'),['saludos']);
  await go('inicio');await start('assessment:a1-primeros');
  const testQuestions = unit => lessons.filter(l=>l.unit===unit).flatMap(assessmentQuestions);
  await answerAll(testQuestions('a1-primeros'));
  await go('leccion/tiempo');assert.match(await evaluate('document.querySelector("main h1").textContent'),/tiempo/);
  await go('ruta');await start('assessment:a1-diario');await answerAll(testQuestions('a1-diario'),false);
  assert.match(await evaluate('document.querySelector("main").textContent'),/Revisa la teoría/);
  await go('leccion/orientacion');assert.match(await evaluate('document.querySelector("main").textContent'),/Esta sección se abre después/);
  await go('palabras');
  await evaluate('document.querySelector("#word-search").value="gracias";document.querySelector("#word-search").dispatchEvent(new Event("input",{bubbles:true}));');
  assert.ok(await evaluate('document.querySelectorAll(".word-card").length > 0'));
  await go('cuenta');assert.match(await evaluate('document.querySelector("main").textContent'),/sincronización aún no está activada/);
  await go('inicio');
  await mkdir(new URL('../.qa/',import.meta.url),{recursive:true});
  for (const theme of ['dark','light']) {
    await evaluate(`document.querySelector('#theme-select').value='${theme}';document.querySelector('#theme-select').dispatchEvent(new Event('change'));`);
    const colors = await evaluate(`Object.fromEntries(['ink','muted','bg','surface','green','hero','hero-text','hero-ink','correct-bg','correct-ink','retry-bg','retry-ink'].map(k=>[k,getComputedStyle(document.documentElement).getPropertyValue('--'+k).trim()]))`);
    for (const [fg,bg] of [['ink','surface'],['muted','bg'],['green','bg'],['hero-text','hero'],['hero-ink','hero'],['correct-ink','correct-bg'],['retry-ink','retry-bg']]) assert.ok(contrast(colors[fg],colors[bg])>=4.5,`${theme}: contrast ${fg}/${bg}`);
    for (const [width,height] of [[1440,1000],[375,812],[812,375]]) {
      await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
      assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'),`${theme}: overflow at ${width}`);
      const screenshot = await send('Page.captureScreenshot',{format:'png'});
      await writeFile(new URL(`../.qa/${theme}-${width}.png`,import.meta.url),Buffer.from(screenshot.data,'base64'));
    }
  }
  await send('Page.reload');await evaluate('new Promise(r=>setTimeout(r,250))');
  assert.equal(await evaluate('document.documentElement.dataset.theme'),'light');
  assert.equal(await evaluate('JSON.parse(localStorage.getItem("vokal.progress.v1")).completed.length'),3);
  assert.deepEqual(errors,[]);
  console.log('Browser QA passed: theme/system/persistence, contrast, responsive layouts, practice, assessment, locks, search and account state. Screenshots: .qa/');
} finally {
  try {await send('Browser.close');} catch { /* The browser may close before acknowledging its own shutdown. */ }
  socket.close();
}
