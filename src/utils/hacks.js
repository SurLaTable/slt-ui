export function likeString(toString) {
	var str = {};
	Object.setPrototypeOf(str, Object.create(String.prototype));
	str.valueOf = str.toString = toString;
	Object.defineProperty(str, 'length', {
		get: function() {
			return toString().length;
		}
	});
	return str;
}
