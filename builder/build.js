import 'dotenv/config';
import log from './modules/print.js';
import tasks from './modules/tasks.js';
import { customArgs } from './modules/args.js';

let args = customArgs({
	boolean: ['tasks'],
	default: {
		tasks: false
	}
});

//tasks
import './modules/setup.js';
import './async.js';
import './components.js';
import './dynamic-registration.js';
import './docs.js';

function handleError(err) {
	if (err) {
		log.error(err.stack);
	}
}

let task = args._[0] || 'default';

tasks.add(
	tasks.timed(() => {
		return tasks.run('clean').then(() => {
			// Run these in parallel:
			return Promise.all([
				tasks.run('build-manifest'),
				tasks.run('build-components'),
				tasks.run('build-docs')
			]);
		});
	}),
	'default',
	'The default task.'
);

if (require.main === module) {
	if (args.tasks) {
		log.info(tasks.list());
	} else {
		tasks
			.run(task)
			.catch(handleError)
			.finally(tasks.get('done'));
	}
}
