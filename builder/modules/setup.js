import 'colors';
import rimraf from 'rimraf';
import path from 'path';
import fs from 'fs';
import { logInfo, logWarn } from './print.js';
import args from './args.js';

if (args.dev) {
	logWarn('DEVELOPMENT ENVIRONMENT');
	process.env.NODE_ENV = 'development';
} else {
	logInfo('PRODUCTION ENVIRONMENT');
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
	await Promise.all([
		remove(path.resolve('./build/async')),
		remove(path.resolve('./build/sync')),
		remove(path.resolve('./builder/temp/'))
	]);
}
export async function done() {
	if (args.dev) {
		logWarn('DEVELOPMENT ENVIRONMENT');
	} else {
		logInfo('PRODUCTION ENVIRONMENT');
		await remove(path.resolve('./builder/temp/'));
	}
}
