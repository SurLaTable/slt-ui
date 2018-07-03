import 'colors';
import { done, clean } from './modules/setup.js';
import { logError, logInfo, logWarn } from './modules/print.js';
import { buildComponents } from './components.js';
import { generateAsync, buildManifest } from './async.js';
import args from './modules/args.js';

if(args._[0]){
	logInfo(`running task ${args._[0]}`);
}


switch (args._[0]) {
	case 'clean':
		clean()
			.then(done)
			.catch((err) => {
				if (err) {
					logError(err.stack);
				}
			});
		break;
	case 'dynamic-registration':
		// This will be a task to make a single component into a bundle for dynamic registration
		break;
	default:
		if(args._[0]){
			logWarn(`task "${args._[0]}" not found, running default task`);
		}
		clean()
			.then(() => {
				return Promise.all([
					generateAsync().then(buildManifest),
					buildComponents()
				]).then(done);
			})
			.catch((err) => {
				if (err) {
					logError(err.stack);
				}
			});
		break;
}
