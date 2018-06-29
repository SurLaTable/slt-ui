import 'colors';
import rimraf from 'rimraf';
import path from 'path';
import fs from 'fs';
import { info, warn } from './modules/print.js';
import parseArgs from 'minimist';

//Give every script access to args
global.args = parseArgs(process.argv.slice(2));

if (args.dev) {
	warn('DEVELOPMENT ENVIRONMENT');
	process.env.NODE_ENV = 'development';
} else {
	info('PRODUCTION ENVIRONMENT');
	process.env.NODE_ENV = 'production';
}

export function remove(filename) {
	return new Promise((resolve, reject) => {
		if (fs.existsSync(filename)) {
			rimraf(filename, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		} else {
			resolve();
		}
	});
}

export async function clean() {
	await remove(path.resolve('./build/async'));
	await remove(path.resolve('./build/sync'));
	await remove(path.resolve('./builder/temp/'));
}
export async function done() {
	if (args.dev) {
		warn('DEVELOPMENT ENVIRONMENT');
	} else {
		info('PRODUCTION ENVIRONMENT');
		await remove(path.resolve('./builder/temp/'));
	}
}
