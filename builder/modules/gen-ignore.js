var through = require("through2"),
	Vinyl = require("vinyl"),
	path = require("path"),
	glob = require("globule"),
	fs = require("fs");

//I may not need this, but I couldn't think of a better way
function posix(filePath) {
	if (path.sep == path.win32.sep) {
		return path.posix.join.apply(null, filePath.split(path.win32.sep));
	}
	return filePath;
}

module.exports = function(opts) {
	if (!opts.cwd) {
		throw new Error("[gen-ignore] opts.cwd is required");
	}

	var currentIgnore = [];
	var ignoreFileName = path.join(opts.cwd, ".gitignore");
	if (fs.existsSync(ignoreFileName) === true) {
		//Read the gitignore from this directory, and use it as a starting point
		currentIgnore = fs.readFileSync(ignoreFileName, "utf8").split(/\r?\n/);
	}

	return through.obj(
		function(file, encoding, cb) {
			var fileName = path.relative(opts.cwd, file.path);
			for (var i = 0; i < currentIgnore.length; i++) {
				if (glob.isMatch(currentIgnore, fileName)) {
					//If this file will already be ignored we can skip adding it to the new file
					cb();
					return;
				}
			}
			currentIgnore.push(posix(fileName));
			cb();
		},
		function(cb) {
			this.push(
				new Vinyl({
					cwd: null,
					base: null,
					path: ".gitignore",
					contents: new Buffer(currentIgnore.join("\n"))
				})
			);
			cb();
		}
	);
};
