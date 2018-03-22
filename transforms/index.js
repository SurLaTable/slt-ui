const wrapExport = require('./async-wrap-exports');
const directReference = require('./change-direct-references.js');
const glob = require('glob');
const fs = require('fs');
const jscodeshift = require('jscodeshift').withParser('flow');

function read(path) {
	var source = fs.readFileSync(path, 'utf8').toString();
	return source;
}

function write(path, source) {
	return fs.writeFileSync(path, source);
}

// Make icons async:
write(
	'./material-ui/packages/material-ui-icons/src/index.js',
	wrapExport(
		{
			source: read(
				'./material-ui/packages/material-ui-icons/src/index.js'
			)
		},
		{ jscodeshift: jscodeshift }
	)
);

// Make all components async:
glob('./material-ui/src/!(styles)/index.js', function(err, files) {
	var out;
	for (var i = 0; i < files.length; i++) {
		out = wrapExport(
			{ source: read(files[i]) },
			{ jscodeshift: jscodeshift }
		);
		write(files[i], out);
	}
});

// Change direct references to use async references:
glob('./material-ui/src/*/!(*.spec).js', function(err, files) {
	var out;
	for (var i = 0; i < files.length; i++) {
		out = directReference(
			{ source: read(files[i]) },
			{ jscodeshift: jscodeshift }
		);
		write(files[i], out);
	}
});

//Add plugin to babelrc
(function() {
	var babelrc = eval(`(${read('./material-ui/.babelrc')})`);
	if (babelrc.plugins.indexOf('dynamic-import-node') === -1) {
		babelrc.plugins.push('dynamic-import-node');
	}
	write('./material-ui/.babelrc', JSON.stringify(babelrc, null, '\t'));
})();
