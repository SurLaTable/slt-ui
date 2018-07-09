const data = require('./data');
const fs = require('fs');

Object.keys(data).forEach(function(product) {
	fs.writeFileSync(
		__dirname + '/productData/' + product + '.json',
		JSON.stringify(data[product]),
		'utf-8'
	);
});
