var fs = require("fs"),
	path = require("path");

export function folders(dir, callback) {
	var tasks = fs
		.readdirSync(dir)
		.filter(function(file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		})
		.map(function(folder) {
			var c = callback.bind(null, folder);
			c.displayName = callback.displayName;
			return c;
		});
	return tasks;
}
export default folders;
