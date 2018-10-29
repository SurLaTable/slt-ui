import log from './print.js';
import rimraf from 'rimraf';
import path from 'path';
import fs from 'fs';
import args from './args.js';
import tasks from './tasks.js';

export function remove(filename) {
	return new Promise((resolve, reject) => {
		if (fs.existsSync(filename)) {
			if (args.verbose) {
				log.general(`removing ${filename}`);
			}
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
clean.description = 'Removes folders that were used for building.';
tasks.add(tasks.timed(clean));

export async function done() {
	if (args.dev == false) {
		await remove(path.resolve('./builder/temp/'));
	}
}
done.hiddenTask = true;
tasks.add(done);
