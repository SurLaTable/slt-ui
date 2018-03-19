const transformer = (file, api, options) => {
	const j = api.jscodeshift;
	const root = j(file.source);

	return root
		.find(j.ImportDeclaration)
		.map((path) => {
			if (path.node && path.node.source) {
				// Test for / in the source path:
				if (/\//.test(path.node.source.value)) {
					const sourceValue = path.node.source.value;
					const sourceWithLettersOnly = sourceValue.replace(/[^\w]/g, "");
					// If the first letter is uppercase we are importing a component:
					if (
						/[A-Z]/.test(sourceWithLettersOnly.slice(0, 1)) &&
						sourceValue.split("/").length > 2
					) {
						// We return those imports without the last word.
						// So "../Form/FormGroup" becomes "../Form",
						// which means it will use the index, and thusly
						// the asynchronous import (thanks to our other
						// jscodeshift recipe).
						path.node.source.value = sourceValue
							.split("/")
							.slice(0, -1)
							.join("/");
					}
				}
			}
			return path;
		})
		.toSource();
};

module.exports = transformer;
