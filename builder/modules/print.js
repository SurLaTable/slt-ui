/*eslint no-console: off */
import 'colors';
import readline from 'readline';

export function date() {
	let d = new Date();
	return `[${d
		.toDateString()
		.split(' ')
		.join('')}]`;
}
export function time() {
	let d = new Date();
	return `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}]`;
}

export function dateTime() {
	let d = new Date();
	return `[${d
		.toDateString()
		.split(' ')
		.join('-')}_${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}-${d.getMilliseconds()}]`;
}

export function warn(...args) {
	return console.warn([time(), ...args].join(' ').yellow);
}

export function error(...args) {
	for (let i = 0; i < args.length; i++) {
		if (args[i] instanceof Error) {
			args[i] = args[i].stack;
		}
	}
	return console.error([time(), ...args].join(' ').bgRed.white);
}

export function info(...args) {
	return console.info([time(), ...args].join(' ').green);
}

export function general(...args) {
	return console.log([time(), ...args].join(' ').reset);
}

export function assert(assertion, ...args) {
	if (!assertion) {
		throw new Error(`Assertion Failed: ${args.join(' ')}`);
	}
}

let loader = {
	message: 'Loading',
	bar: '#',
	back: '-',
	max: 0,
	bminus: 0,
	started: false
};
export function startLoader(max, message = loader.message) {
	if (loader.started) {
		throw new Error('End other loader with endLoader() before starting another');
	}
	loader.message = message;
	loader.max = max;
	loader.bminus = max.toString().length * 2 + 1;
	loader.started = true;

	var stat = ('0/' + loader.max).padStart(loader.bminus);
	var w =
		process.stdout.columns -
		((loader.message.length + 5 + loader.bminus) % process.stdout.columns);
	process.stdout.write(`${loader.message} [${loader.back.repeat(w)}] ${stat}`);
}
export function setLoader(count) {
	if (loader.started == false) {
		throw new Error('Call startLoader() before using setLoader()');
	}
	var w =
		process.stdout.columns -
		((loader.message.length + 5 + loader.bminus) % process.stdout.columns);
	var p = parseInt((count / loader.max) * w, 10);
	var stat = (count + '/' + loader.max).padStart(loader.bminus);
	var l = w - p;
	readline.cursorTo(process.stdout, 0);
	process.stdout.write(
		`${loader.message} [${loader.bar.repeat(p)}${loader.back.repeat(l)}] ${stat}`
	);
}
export function endLoader() {
	loader.started = false;
	var stat = (loader.max + '/' + loader.max).padStart(loader.bminus);
	var w =
		process.stdout.columns -
		((loader.message.length + 5 + loader.bminus) % process.stdout.columns);

	readline.cursorTo(process.stdout, 0);
	process.stdout.write(`${loader.message} [${loader.bar.repeat(w)}] ${stat}`);
	process.stdout.write(`\n`.reset);
}

process.on('uncaughtException', function(err) {
	error(err);
});

export default {
	date,
	time,
	dateTime,
	warn,
	error,
	info,
	general,
	assert,
	loader: {
		start: startLoader,
		set: setLoader,
		end: endLoader
	}
};
