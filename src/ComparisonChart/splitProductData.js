import data from './data';
import fs from 'fs';

Object.keys(data).forEach(function(product) {
	fs.writeFileSync(
		__dirname + '/productData/' + product + '.json',
		JSON.stringify(data[product]),
		'utf-8'
	);
});
