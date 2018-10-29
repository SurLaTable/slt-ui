import 'dotenv/config';
import path from 'path';
import config from '../config/build.webpack.config.js';
import webpackServe from 'webpack-serve';
import serve from 'koa-static';
import mount from 'koa-mount';
import styleguidist from 'react-styleguidist';

import tasks from '../modules/tasks.js';
import '../async.js';

import styleguideConfig from './styleguide.config.js';
import webpackConfig from './webpack.config.js';

const styleguide = styleguidist(styleguideConfig);

const serveConfig = config(
	'docs-server',
	styleguide.makeWebpackConfig(process.env.NODE_ENV),
	webpackConfig
);

var serverConfig = {
	content: [path.resolve(__dirname, './assets')],
	config: [serveConfig],
	port: 4000,
	open: true,
	add: (app, middleware) => {
		middleware.webpack();
		middleware.content();
		/*
		This allows the async components to actually find their chunks
		since the public path for the async components is /scripts/manifest.
		*/
		app.use(mount('/scripts/manifest', serve(path.resolve('./build/async'))));
	}
};

webpackServe(serverConfig).then((server) => {
	server.on('build-finished', () => {
		// Whenever a refresh or rebuild happens you can do something here.
	});
});
