import args from './modules/args';
import path from 'path';
import { write } from './utils';

const componentName = args._[0];

write(
	path.resolve(`./src/${componentName}/index.js`),
	`
export * from './${componentName}.js';
export { default as ${componentName} } from './${componentName}.js';
`
);
write(
	path.resolve(`./src/${componentName}/${componentName}.js`),
	`
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

// Always use direct references for Material UI
// component imports. Because #perfMatters!
// import Typography from '@material-ui/core/Typography';

const ${componentName}Styles = () => ({
	root: {
	}
});

class ${componentName} extends React.Component {
	state = {
	};

	render() {
		return (
			<React.Fragment>
			</React.Fragment>
		);
	}
}

${componentName}.propTypes = {
};

${componentName}.defaultProps = {};

export default withStyles(${componentName}Styles)(connect((state, props) => ({
	...props,
}))(${componentName}));
`
);
write(
	path.resolve(`./src/${componentName}/${componentName}.md`),
	`
\`\`\`jsx
<StoreProvider>
	<${componentName} />
</StoreProvider>
\`\`\`

\`\`\`html
<div data-component="StoreProvider">
	<div data-component="${componentName}"></div>
</div>
\`\`\`
`
);
write(
	path.resolve(`./src/${componentName}/${componentName}.test.js`),
	`
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ${componentName} from './${componentName}';
import StoreProvider from '../StoreProvider';

test('Render', () => {
	const renderer = new ShallowRenderer();
	renderer.render(
		<StoreProvider>
			<${componentName}></${componentName}>
		</StoreProvider>
	);
	const result = renderer.getRenderOutput();
	expect(result).toMatchSnapshot();
});
`
);
