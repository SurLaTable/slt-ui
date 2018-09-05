export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const cameleize = (strings = []) =>
	strings.slice(1).reduce((acc, str) => acc + capitalize(str), strings[0]);

export const fromEntries = (arr) =>
	arr.reduce((obj, [key, value]) => {
		obj[key] = value;
		return obj;
	}, {});
export const objectMap = (obj, fn) =>
	fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value, key)]));

export const objectFilter = (obj, fn) =>
	fromEntries(Object.entries(obj).filter(([key, value]) => fn(value, key)));
