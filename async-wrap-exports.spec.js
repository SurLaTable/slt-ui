import fs from "fs";
import path from "path";
import { assert } from "chai";
import jscodeshift from "jscodeshift";
import transformer from "./async-wrap-exports";

function trim(str) {
	return str.replace(/^\s+|\s+$/, "");
}

function read(fileName) {
	return fs.readFileSync(path.join(__dirname, fileName), "utf8").toString();
}

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
					trim(actual),
					trim(expected),
					"The transformed version should be correct."
				);
			});
		});
	});
});
