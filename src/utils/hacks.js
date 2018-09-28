export function likeString(toString) {
	var str = {};
	Object.setPrototypeOf(str, String.prototype);
	str.valueOf = str.toString = toString;
	return str;
}
