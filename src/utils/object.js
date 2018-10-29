export const mask = (obj, maskObj, filterDefault = true) => {
	if (typeof maskObj == 'object' && maskObj !== null && typeof obj == 'object' && obj !== null) {
		var result = new obj.constructor();
		for (let key in obj) {
			if (obj.hasOwnProperty(key) && maskObj[key] !== false) {
				result[key] = mask(obj[key], maskObj[key], filterDefault);
			}
		}
		return result;
	} else if (filterDefault === true && maskObj !== false) {
		//mask must explicitly remove
		return obj;
	} else if (filterDefault === false && maskObj === true) {
		//mask must explicitly include
		return obj;
	}
};

export const merge = (a, b) => {
	if (typeof a === 'object' && a !== null && typeof b == 'object' && b !== null) {
		for (let key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = merge(a[key], b[key]);
			}
		}
	} else if (b !== undefined) {
		return b;
	}
	return a;
};
