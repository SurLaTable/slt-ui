import fs from "fs";
import path from "path";
import { assert } from "chai";
import jscodeshift from "jscodeshift";
import transformer from "./change-direct-references";

function trim(str) {
	return str.replace(/^\s+|\s+$/, "");
}

function read(fileName) {
	return fs.readFileSync(path.join(__dirname, fileName), "utf8").toString();
}

describe("material-ui-codemod", () => {
	describe("v1.0.0", () => {
		describe("change-direct-references", () => {
			it("Changes direct references to reference the asynchronous index", () => {
				const actual = transformer(
					{ source: read("./change-direct-references.spec/actual.js") },
					{ jscodeshift: jscodeshift }
				);

				const expected = read("./change-direct-references.spec/expected.js");

				assert.strictEqual(
					trim(actual),
					trim(expected),
					"The transformed version should be correct."
				);
			});
		});
	});
});
