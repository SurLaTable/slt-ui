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
	return console.error([time(), ...args].join(' ').bgRed.white);
}

export function info(...args) {
	return console.info([time(), ...args].join(' ').cyan);
}

export function general(...args) {
	return console.log([time(), ...args].join(' ').grey);
}

export function assert(assertion, ...args) {
	if (!assertion) {
		throw new Error(`Assertion Failed: ${args.join(' ')}`);
	}
}

let loader = {
	message: 'Loading',
	bar: ' '.bgGreen,
	back: '_'.grey,
	max: 0,
	started: false
};
export function startLoader(max, message = loader.message) {
	if (loader.started) {
		throw new Error('End other loader with endLoader() before starting another');
	}
	loader.message = message;
	loader.max = max;
	loader.started = true;
	var w = process.stdout.columns - ((loader.message.length + 3) % process.stdout.columns);
	process.stdout.write(`${loader.message}: ${loader.back.repeat(w)}`);
}
export function setLoader(count) {
	if (loader.started == false) {
		throw new Error('Call startLoader() before using setLoader()');
	}
	var w = process.stdout.columns - ((loader.message.length + 3) % process.stdout.columns);
	var p = parseInt((count / loader.max) * w, 10);
	var l = w - p;
	readline.cursorTo(process.stdout, 0);
	process.stdout.write(`${loader.message}: ${loader.bar.repeat(p)}${loader.back.repeat(l)}`);
}
export function endLoader() {
	loader.started = false;
	process.stdout.write(`\n`.reset);
}

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
