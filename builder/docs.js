import log from './modules/print';
import tasks from './modules/tasks.js';
import styleguideConfig from './docs/styleguide.config.js';
import webpackConfig from './docs/webpack.config.js';
import styleguidist from 'react-styleguidist';
import config from './config/build.webpack.config.js';

export function buildDocs() {
	return new Promise((resolve, reject) => {
		styleguidist({
			...styleguideConfig,
			webpackConfig: config('docs-static', webpackConfig)
		}).build((err, config, stats) => {
			log.general(
				stats.toString({
					// Shows colors in the console:
					colors: true
				})
			);
			if (err || stats.hasErrors()) {
				reject(err);
			} else {
				log.info(`Style guide published to ${config.styleguideDir}`);
				resolve();
			}
		});
	});
}
buildDocs.displayName = 'build-docs';
buildDocs.description = 'Build static docs using styleguidist';

tasks.add(tasks.timed(buildDocs));
