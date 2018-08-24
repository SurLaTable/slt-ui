import 'colors';
import rimraf from 'rimraf';
import path from 'path';
import fs from 'fs';
import log from './print.js';
import args from './args.js';

import tasks from './tasks.js';

if (args.dev) {
	log.warn('DEVELOPMENT ENVIRONMENT');
} else {
	log.info('PRODUCTION ENVIRONMENT');
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
		remove(path.posix.resolve('./build/async')),
		remove(path.posix.resolve('./build/sync')),
		remove(path.posix.resolve('./builder/temp/'))
	]);
}
clean.description = 'Removes folders that were used for building.';
tasks.add(tasks.timed(clean));
export async function done() {
	if (args.dev) {
		log.warn('DEVELOPMENT ENVIRONMENT');
	} else {
		log.info('PRODUCTION ENVIRONMENT');
		await remove(path.posix.resolve('./builder/temp/'));
	}
}
done.hiddenTask = true;
tasks.add(done);
