import parseArgs from 'minimist';
import merge from 'merge';

export function customArgs(options) {
	return parseArgs(
		process.argv.slice(2),
		merge(
			{
				boolean: ['dev', 'report'],
				default: {
					report: false
				}
			},
			options
		)
	);
}

export default customArgs();
