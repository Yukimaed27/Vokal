import {mkdir,copyFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {publicFiles} from './public-files.mjs';
import {publicConfig} from './config.mjs';
const root = fileURLToPath(new URL('../',import.meta.url));
const config = await publicConfig();
for (const file of publicFiles) {
  const target = path.join(root,'dist',file);
  await mkdir(path.dirname(target),{recursive:true});
  await copyFile(path.join(root,file),target);
}
await writeFile(path.join(root,'dist/src/config.js'),config);
console.log(`Build estático listo: dist/ (${publicFiles.length+1} archivos, sin dependencias).`);
