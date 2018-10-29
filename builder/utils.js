import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

const write = (filePath, code) => {
	mkdirp.sync(path.dirname(filePath));

	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, code, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
};
export { write };
