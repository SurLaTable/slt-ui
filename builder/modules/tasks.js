import log from './print.js';

let tasks = {};
var longestTaskNameLength = 0;

export async function run(taskName) {
	if (tasks.hasOwnProperty(taskName)) {
		return Promise.resolve().then(tasks[taskName]);
	}
	return Promise.reject(new Error(`Task "${taskName}" does not exist`));
}

export function add(task, name, description) {
	name = name || task.displayName || task.name;
	description = description || task.description;
	if (tasks.hasOwnProperty(name)) {
		throw new Error(`Task "${name}" already exists.`);
	}
	tasks[name] = () => {
		log.info(`Running task: ${name}`);
		return task();
	};
	tasks[name].displayName = name;
	tasks[name].description = description;
	tasks[name].hiddenTask = task.hiddenTask;

	if (name.length > longestTaskNameLength) {
		longestTaskNameLength = name.length;
	}
}

export function timed(task, name, description) {
	name = name || task.displayName || task.name;
	description = description || task.description;
	let timedTask = function() {
		let start = Date.now();
		return task().then(() => {
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
					? ' '.repeat(longestTaskNameLength - name.length) + ' - ' + task.description
					: ''
			}`
		);
	}
	return `
[TASKS]
------------------------
${output.join('\n')}
`;
}

export default { run, add, get, has, timed, list };
