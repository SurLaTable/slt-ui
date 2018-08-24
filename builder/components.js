import path from 'path';
import webpack from 'webpack';
import log from './modules/print.js';
import webpackConfig from './config/build.webpack.config.js';
import tasks from './modules/tasks.js';

export default async function buildComponents() {
	var finalConfig = webpackConfig('Sync', {
		entry: {
			index: './src/index.js'
		},
		output: {
			path: path.posix.resolve('./build/sync')
		}
	});

	return new Promise((resolve, reject) => {
		webpack(finalConfig, (err, stats) => {
			log.general(
				stats.toString({
					// Shows colors in the console:
					colors: true
				})
			);
			if (err || stats.hasErrors()) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

buildComponents.displayName = 'build-components';
buildComponents.description = 'build a single file bundle with all components.';

tasks.add(tasks.timed(buildComponents));
