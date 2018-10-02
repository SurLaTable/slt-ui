import parseArgs from 'minimist';
import merge from 'deepmerge';
import log from './print.js';
import 'colors';

export function customArgs(options = {}) {
	options = merge(
		{
			boolean: ['dev', 'report', 'verbose'],
			default: {
				verbose: false,
				report: false,
				dev: process.env.NODE_ENV == 'development'
			},
			alias: {
				v: 'verbose',
				d: 'dev',
				r: 'report'
			}
		},
		options
	);

	let args = parseArgs(process.argv.slice(2), options);
	if (args.dev) {
		process.env.NODE_ENV = 'development';
	} else {
		process.env.NODE_ENV = 'production';
	}
	return args;
}

let args = customArgs();
export default args;

if (args.dev) {
	log.warn('DEVELOPMENT ENVIRONMENT');
} else {
	log.info('PRODUCTION ENVIRONMENT');
}

function close(why) {
	if (args.dev) {
		log.warn(`DEVELOPMENT ENVIRONMENT exiting [${why}]`);
	} else {
		log.info(`PRODUCTION ENVIRONMENT exiting [${why}]`);
	}
	process.exit();
}
['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGABRT', 'SIGTERM'].forEach((v) =>
	process.on(v, close.bind(null, v))
);

process.on('exit', (code) => {
	if (args.dev) {
		log.warn(`DEVELOPMENT ENVIRONMENT exiting with code ${code}`);
	} else {
		log.info(`PRODUCTION ENVIRONMENT exiting with code ${code}`);
	}
});
