const highlight = require('cli-highlight').highlight;

const transformer = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const componentNameStyle = /^\W+[A-Z]/;

  console.log('Inspecting', file.path);

  const body = root.get().node.program.body;
  const header = `import { asyncComponent } from 'react-async-component';`;

  if (body.length && j(body[0]).toSource() != header) {
    body.unshift(header);
  }

  return root
    .find(j.ExportNamedDeclaration)
    .map(path => {
      if (path.node && path.node.source) {
        // Test to see if the first character of the first word is UPPERCASE.
        // This is a good test according to the Material UI
        // maintainers.
        // https://github.com/mui-org/material-ui/issues/10647#issuecomment-373093870
        // This is "./FormGroup" if we see `export { default } from "./FromGroup"`
        const sourceLocation = path.node.source.value;
        if (sourceLocation.match(componentNameStyle)) {
          console.log(
            'Transforming at line',
            path.node.loc.start.line,
            '\n',
            highlight(j(path.node).toSource(), {
              language: 'javascript',
            }),
          );
          const exports = path.node.specifiers.map(specifier => {
            const localExport = specifier.local.name === specifier.exported.name;

            return localExport && specifier.local.name === 'default'
              ? [
                  `export default asyncComponent({`,
                  `/* webpackChunkName: "${
                    sourceLocation
                      .split('/')
                      .slice(-1)[0]
                      .split('.')[0]
                  }" */`,
                  `	resolve: () => import('${sourceLocation}'),`,
                  `});`,
                ].join('\n')
              : [
                  `export const ${specifier.exported.name} = asyncComponent({`,
                  `/* webpackChunkName: "${specifier.exported.name}" */`,
                  `	resolve: () => import('${sourceLocation}')${
                    specifier.local.name !== 'default'
                      ? `.then(module => module['${specifier.local.name}'] )`
                      : ''
                  },`,
                  `});`,
                ].join('\n');
          });
          const comments = path.node.comments;
          j(path).replaceWith(exports.join('\n'));
          path.node.comments = comments;
        }
      }
      return path;
    })
    .toSource();
};

module.exports = transformer;
