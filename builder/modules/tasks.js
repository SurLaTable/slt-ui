import log from './print.js';
import path from 'path';
import cliArgs from './args.js';

let tasks = {};
var longestTaskNameLength = 0;

function _getCallerFile() {
	let pst = Error.prepareStackTrace;

	try {
		var err = new Error();
		var callerfile;
		var currentfile;

		Error.prepareStackTrace = function(err, stack) {
			return stack;
		};

		currentfile = err.stack.shift().getFileName();

		while (err.stack.length) {
			callerfile = err.stack.shift().getFileName();

			if (currentfile !== callerfile) {
				return callerfile;
			}
		}
	} catch (e) {
		log.error(e);
	} finally {
		Error.prepareStackTrace = pst;
	}

	return undefined;
}

export async function run(taskName, ...args) {
	if (tasks.hasOwnProperty(taskName)) {
		return await tasks[taskName](...args);
	}
	throw new Error(`Task "${taskName}" does not exist`);
}

export function add(task, name, description) {
	name = name || task.displayName || task.name;
	description = description || task.description;
	if (tasks.hasOwnProperty(name)) {
		throw new Error(`Task "${name}" already exists.`);
	}

	let definition = path.relative('./', _getCallerFile());

	tasks[name] = (...args) => {
		if (cliArgs.verbose) {
			log.info(`Running task: ${name}`, `(${definition})`.grey);
			if (description) {
				log.general(description.reset);
			}
		} else {
			log.info(`Running task: ${name}`);
		}
		return task(...args);
	};
	tasks[name].displayName = name;
	tasks[name].description = description;
	tasks[name].definition = definition;
	tasks[name].hiddenTask = task.hiddenTask;

	if (name.length > longestTaskNameLength) {
		longestTaskNameLength = name.length;
	}
}

export function timed(task, name, description) {
	name = name || task.displayName || task.name;
	description = description || task.description;
	let timedTask = function(...args) {
		let start = Date.now();
		return task(...args).then(() => {
			log.info(`Task ${name} finished in ${((Date.now() - start) / 1000).toFixed(2)}s`);
		});
	};
	timedTask.displayName = name;
	timedTask.description = description;
	timedTask.hiddenTask = task.hiddenTask;
	return timedTask;
}

export function has(name) {
	return tasks.hasOwnProperty(name);
}
export function get(name) {
	return tasks[name];
}

export function list() {
	let output = [];
	for (let name in tasks) {
		if (tasks[name].hiddenTask === true) {
			continue;
		}
		let task = tasks[name];
		output.push(
			`${name.cyan}${
				task.description
					? `${' '.repeat(longestTaskNameLength - name.length)} - ${task.description}`
					: ''
			} ${('(' + task.definition + ')').grey}`
		);
	}
	return `
[TASKS]
------------------------
${output.join('\n')}
`;
}

export default { run, add, get, has, timed, list };
