import 'colors';
import { done, clean } from './setup.js';
import { error } from './modules/print';
import { buildComponents } from './components.js';
import { generateAsync, buildManifest } from './async.js';

clean()
	.then(() => {
		return Promise.all([
			generateAsync().then(buildManifest),
			buildComponents()
		]).then(done);
	})
	.catch((err) => {
		if (err) {
			error(err.stack);
		}
	});
