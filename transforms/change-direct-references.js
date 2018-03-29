const highlight = require('cli-highlight').highlight;

const transformer = (file, api, options) => {
	const j = api.jscodeshift;
	const root = j(file.source);

	console.log('Inspecting', file.path);

	return root
		.find(j.ImportDeclaration)
		.map((path) => {
			if (path.node && path.node.source) {
				// Test for / in the source path:
				if (/\//.test(path.node.source.value)) {
					const sourceValue = path.node.source.value;
					const sourceWithLettersOnly = sourceValue.replace(
						/[^\w]/g,
						''
					);
					// If the first letter is uppercase we are importing a component:
					if (
						/[A-Z]/.test(sourceWithLettersOnly.slice(0, 1)) &&
						sourceValue.split('/').length > 2 &&
						path.node.specifiers[0] &&
						path.node.specifiers[0].local &&
						path.node.specifiers[0].local.name &&
						path.node.specifiers[0].local.name.slice(0, 1) ===
							path.node.specifiers[0].local.name
								.slice(0, 1)
								.toUpperCase()
					) {
						// We return those imports without the last word.
						// So "../Form/FormGroup" becomes "../Form",
						// which means it will use the index, and thusly
						// the asynchronous import (thanks to our other
						// jscodeshift recipe).
						console.log(
	            'Transforming at line',
	            path.node.loc.start.line,
	            '\n',
	            highlight(j(path.node).toSource(), {
	              language: 'javascript',
	            }),
	          );
						path.node.source.value = sourceValue
							.split('/')
							.slice(0, -1)
							.join('/');
						// Since the imports now reference the index.js, they
						// need to use the tree destructuring syntax (be
						// wrapped in curly brackets).
						const firstSpecifier =
							path.node.specifiers[0].local.name;

						path.node.specifiers[0].local.name = `{ ${firstSpecifier}`;
						const lastSpecifier =
							path.node.specifiers[
								path.node.specifiers.length - 1
							].local.name;
						path.node.specifiers[
							path.node.specifiers.length - 1
						].local.name = `${lastSpecifier} }`;
					}
				}
			}
			return path;
		})
		.toSource();
};

module.exports = transformer;
