import path from 'path';
import config from './webpack.config.js';
import webpackServe from 'webpack-serve';
import serve from 'koa-static';
import mount from 'koa-mount';

import tasks from '../builder/modules/tasks.js';
import log from '../builder/modules/print.js';
import '../builder/async.js';

log.warn('THIS SANDBOX IS DEPRECATED: please use `docs` to document, test, and prototype. ');

var serverConfig = {
	content: [path.resolve(__dirname, 'index.js'), path.resolve('./build')],
	config: config,
	port: 4000,
	open: true,
	add: (app, middleware, options) => {
		middleware.webpack();
		middleware.content();
		app.use(mount('/scripts/manifest', serve(path.resolve('./build/async'))));
	}
};

webpackServe(serverConfig).then((server) => {
	server.on('build-finished', () => {
		tasks.run('build-manifest');
	});
});
