import parseArgs from 'minimist';
import merge from 'merge';

export function customArgs(options) {
	let args = parseArgs(
		process.argv.slice(2),
		merge(
			{
				boolean: ['dev', 'report'],
				default: {
					report: false,
					dev:process.env.NODE_ENV == 'development'
				}
			},
			options
		)
	);
	if(args.dev){
		process.env.NODE_ENV = 'development';
	}else{
		process.env.NODE_ENV = 'production';
	}
	return args;
}

export default customArgs();
