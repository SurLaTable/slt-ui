import 'colors';

export function logDate() {
	let d = new Date();
	return `[${d
		.toDateString()
		.split(' ')
		.join('')}]`;
}
export function logTime() {
	let d = new Date();
	return `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}]`;
}

export function logDateTime() {
	let d = new Date();
	return `[${d
		.toDateString()
		.split(' ')
		.join(
			'-'
		)}_${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}-${d.getMilliseconds()}]`;
}

export function logInfo(...args) {
	return console.info([logTime(), ...args].join(' ').cyan);
}

export function logWarn(...args) {
	return console.warn([logTime(), ...args].join(' ').yellow);
}

export function logError(...args) {
	return console.error([logTime(), ...args].join(' ').bgRed.white);
}

export function logData(...args) {
	return console.log([logTime(), ...args].join(' ').grey);
}
