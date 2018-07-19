import 'colors';
import { done, clean } from './modules/setup.js';
import log from './modules/print.js';
import { generateAsync, buildManifest } from './async.js';
import buildComponents from './components.js';
import buildDynamicRegistration from './dynamic-registration.js';

import args from './modules/args.js';

if (args._[0]) {
	log.info(`running task ${args._[0]}`);
}

function handleError(err) {
	if (err) {
		log.error(err.stack);
	}
}

switch (args._[0]) {
	case 'clean':
		clean()
			.then(done)
			.catch(handleError);
		break;
	case 'dynamic-registration':
		buildDynamicRegistration()
			.then(done)
			.catch(handleError);
		break;
	default:
		if (args._[0]) {
			log.warn(`task "${args._[0]}" not found, running default task`);
		}
		clean()
			.then(() => {
				return Promise.all([generateAsync().then(buildManifest), buildComponents()]).then(
					done,
				);
			})
			.catch(handleError);
		break;
}
