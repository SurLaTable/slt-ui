/*eslint no-console: off */
import 'colors';

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

export default {
	date,
	time,
	dateTime,
	warn,
	error,
	info,
	general,
	assert
};
