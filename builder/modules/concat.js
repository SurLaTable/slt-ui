var through = require("through2"),
	Vinyl = require("vinyl"),
	glob = require("globule"),
	srcConcat = require("concat-with-sourcemaps"),
	vinylSourcemapsApply = require("vinyl-sourcemaps-apply");

module.exports = function(fileGlobs, opt) {
	opt = opt || {};

	var outFiles = {};
	var foundSourceMap = false;

	function concatBuffersOnly(files, filename) {
		//no source maps, do it fast
		for (var i = 0; i < files.length; i++) {
			files[i] = files[i].contents;
		}

		return new Vinyl({
			cwd: null,
			base: null,
			path: filename,
			contents: Buffer.concat(files)
		});
	}

	function concatWithSourceMap(files, filename) {
		var outFile,
			i,
			sourceStream,
			inFiles = {};
		for (i = 0; i < files.length; i++) {
			if (!inFiles[files[i].path]) {
				inFiles[files[i].path] = files[i].contents.toString();
			}
		}
		sourceStream = new srcConcat(filename, opt.newLine || "\n");
		for (i = 0; i < files.length; i++) {
			sourceStream.add(
				files[i].relative,
				inFiles[files[i].path],
				files[i].sourceMap
			);
		}
		outFile = new Vinyl({
			cwd: null,
			base: null,
			path: filename,
			contents: new Buffer(sourceStream.content)
		});
		vinylSourcemapsApply(outFile, sourceStream.sourceMap);
		return outFile;
	}

	function addContent(filename, file) {
		if (!outFiles[filename]) {
			outFiles[filename] = [];
		}
		if (file.sourceMap) {
			foundSourceMap = true;
		}
		outFiles[filename].push(file);
	}

	return through.obj(
		function(file, encoding, cb) {
			new Map(Object.entries(fileGlobs)).forEach(function(
				fileglob,
				filename
			) {
				var path =
					file.path.indexOf(file.cwd) >= 0
						? file.path.substring(
								file.path.indexOf(file.cwd) +
									file.cwd.length +
									1
						  )
						: file.path.replace(opt.root, "");

				if (glob.isMatch(fileglob, path)) {
					addContent(filename, file);
				}
			});

			//save the files until they're done streaming/buffering
			cb();
		},
		function(cb) {
			var self = this;

			//once they're done giving us files, we give them the concatenated results
			new Map(Object.entries(outFiles)).forEach(function(
				files,
				filename
			) {
				self.push(
					foundSourceMap
						? concatWithSourceMap(files, filename)
						: concatBuffersOnly(files, filename)
				);
			});

			cb();
		}
	);
};
