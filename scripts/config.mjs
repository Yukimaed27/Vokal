import {existsSync} from 'node:fs';
import {cloudConfig as defaults} from '../src/config.js';
import {validateConfig} from '../src/cloud.js';
export async function publicConfig() {
  const localFile = new URL('../src/config.local.js',import.meta.url);
  const local = existsSync(localFile) ? (await import(localFile.href)).cloudConfig : defaults;
  const config = {
    supabaseUrl:process.env.SUPABASE_URL?.trim() || local.supabaseUrl,
    supabasePublishableKey:process.env.SUPABASE_PUBLISHABLE_KEY?.trim() || local.supabasePublishableKey,
  };
  validateConfig(config);
  return `export const cloudConfig = ${JSON.stringify(config)};\n`;
}
