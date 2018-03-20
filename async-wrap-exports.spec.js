import fs from "fs";
import path from "path";
import assert from "assert";
import jscodeshift from "jscodeshift";
import transformer from "./async-wrap-exports";

// Whitespace and line endings should not be a factor
// for our tests. They just cause more headaches because
// of discrepancies across platforms (LF VS CRLF).
const cleanWhitespace = (str) => str.replace(/\s/g, "");

const read = (fileName) =>
	fs.readFileSync(path.join(__dirname, fileName), "utf8").toString();

describe("material-ui-codemod", () => {
	describe("v1.0.0", () => {
		describe("async-wrap-exports", () => {
			it("Wraps exports to be asynchronous", () => {
				const actual = transformer(
					{ source: read("./async-wrap-exports.spec/actual.js") },
					{ jscodeshift: jscodeshift }
				);

				const expected = read("./async-wrap-exports.spec/expected.js");

				assert.strictEqual(
					cleanWhitespace(actual),
					cleanWhitespace(expected),
					"The transformed version should be correct."
				);
			});
		});
	});
});
