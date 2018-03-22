import fs from 'fs';
import path from 'path';
import assert from 'assert';
import jscodeshift from 'jscodeshift';
import transformer from './change-direct-references';

// Whitespace and line endings should not be a factor
// for our tests. They just cause more headaches because
// of discrepancies across platforms (LF VS CRLF).
const cleanWhitespace = (str) => str.replace(/\s/g, '');

const read = (fileName) =>
	fs.readFileSync(path.join(__dirname, fileName), 'utf8').toString();

describe('material-ui-codemod', () => {
	describe('v1.0.0', () => {
		describe('change-direct-references', () => {
			it('Changes direct references to reference the asynchronous index', () => {
				const actual = transformer(
					{
						source: read(
							'./change-direct-references.spec/actual.js'
						)
					},
					{ jscodeshift: jscodeshift }
				);

				const expected = read(
					'./change-direct-references.spec/expected.js'
				);

				assert.strictEqual(
					cleanWhitespace(actual),
					cleanWhitespace(expected),
					'The transformed version should be correct.'
				);
			});
		});
	});
});
