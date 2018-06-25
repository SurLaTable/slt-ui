import 'colors';
import rimraf from 'rimraf';
import path from 'path';
import fs from 'fs';
import {info,warn} from './modules/print.js';

if (process.argv.includes('--dev')) {
  warn("DEVELOPMENT BUILD");
  process.env.NODE_ENV = 'development';
} else {
  info("PRODUCTION BUILD");
  process.env.NODE_ENV = 'production';
}

export function remove(filename) {
  return new Promise((resolve, reject) => {
    if(fs.existsSync(filename)){
      rimraf(filename, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }else{
      resolve();
    }
  });
}

export async function clean() {
  await remove(path.resolve('./build/'));
  await remove(path.resolve('./builder/temp/'));
}
export async function done() {
  if (process.env.NODE_ENV == 'development') {
    warn("DEVELOPMENT BUILD FINISHED");
  } else {
    info("PRODUCTION BUILD FINISHED");
    await remove(path.resolve('./builder/temp/'));
  }
}
