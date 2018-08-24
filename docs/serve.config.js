import 'dotenv/config';
import path from 'path';
import config from './webpack.config.js';
import webpackServe from 'webpack-serve';
import serve from 'koa-static';
import mount from 'koa-mount';

import tasks from '../builder/modules/tasks.js';
import '../builder/async.js';

var serverConfig = {
	content: [path.resolve('./build')],
	config: [config],
	port: 4000,
	open: true,
	add: (app, middleware, options) => {
		middleware.webpack();
		middleware.content();
		/*
		This allows the async components to actually find their chunks
		since the public path for the async components is /scripts/manifest
		*/
		app.use(mount('/scripts/manifest', serve(path.resolve('./build/async'))));
	}
};

//This allows async components to be tested in the docs
tasks.run('build-manifest').then(() => {
	//Start the docs server
	webpackServe(serverConfig).then((server) => {
		server.on('build-finished', () => {
			//
		});
	});
});
