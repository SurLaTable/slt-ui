var Vinyl = require("vinyl"),
	path = require("path"),
	{ Readable } = require("stream");

class FSStream extends Readable {
	constructor(fs, opts) {
		super({ objectMode: true });
		this.fs = fs;
		this.opts = opts || {};
	}
	_read() {
		console.log(process.platform);
		var self = this;
		function flatten(directoryObject, fullPath, output) {
			var filepath, key;
			for (key in directoryObject) {
				filepath = fullPath
					? path.normalize(path.join(fullPath, "/", key))
					: process.platform.indexOf("win") === -1
						? path.join("/", key)
						: key;
				if (directoryObject[key] instanceof Buffer) {
					output[filepath] = new Vinyl({
						cwd: self.opts.cwd || process.cwd(),
						base: self.opts.base || process.cwd(),
						path: filepath,
						contents: directoryObject[key]
					});
					self.push(output[filepath]);
					continue;
				}
				flatten(directoryObject[key], filepath, output);
			}
			return output;
		}
		var output = flatten(self.fs.data, "", {});
		this.push(null);
	}
}

module.exports = FSStream;
