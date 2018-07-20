import path from 'path';
import webpack from 'webpack';
import log from './modules/print.js';
import webpackConfig from './config/build.webpack.config.js';

export default async function buildComponents() {
	log.info('BUILD COMPONENTS STARTED');
	var finalConfig = webpackConfig('Sync', {
		entry: {
			index: './src/index.js'
		},
		output: {
			path: path.resolve('./build/sync')
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
			log.info('BUILD COMPONENTS ENDED');
			if (err || stats.hasErrors()) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

buildComponents.displayName = 'components';
buildComponents.description = 'components';
