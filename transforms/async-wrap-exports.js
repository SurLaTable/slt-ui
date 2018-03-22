const transformer = (file, api, options) => {
	const j = api.jscodeshift;
	const root = j(file.source);

	var body = root.get().node.program.body;
	if (
		j(body[0]).toSource() !=
		`import { asyncComponent } from 'react-async-component';`
	) {
		body.unshift(`import { asyncComponent } from 'react-async-component';`);
	}

	return root
		.find(j.ExportNamedDeclaration)
		.map((path) => {
			if (path.node && path.node.source) {
				// Remove any non-word characters from the source value:
				const importName = path.node.source.value.replace(/[^\w]/g, '');
				// Test to see if the first character is UPPERCASE.
				// This is a good test according to the Material UI
				// maintainers.
				// https://github.com/mui-org/material-ui/issues/10647#issuecomment-373093870
				if (
					/[A-Z]/.test(importName.slice(0, 1)) &&
					path.node.specifiers.length === 1
				) {
					// If the export does:
					//     export { default } from './AppBar'
					// We want it to be:
					//     export default AppBar;
					// Otherwise it fails Material UI's styleguide/linting.

					var sourceLocation = path.node.source.value;

					if (
						path.node.specifiers[0].local.name ===
						path.node.specifiers[0].exported.name
					) {
						j(path).replaceWith(
							[
								`export default asyncComponent({`,
								`	resolve: () => import('${sourceLocation}'),`,
								`});`
							].join('\n')
						);
					} else {
						// TODO:
						// We need to verify if we need to accomodate more
						// than one specifier in the case of index.js files.
						j(path).replaceWith(
							[
								`export const ${importName} = asyncComponent({`,
								`	resolve: () => import('${sourceLocation}'),`,
								`});`
							].join('\n')
						);
					}
				}
			}
			return path;
		})
		.toSource();
};

module.exports = transformer;
