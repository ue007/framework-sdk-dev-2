const common = require('../../webpack.config');

module.exports = {
	...common,
	output: {
		library: ['B', 'Math'],
		libraryTarget: 'umd',
		filename: 'index.umd.js'
	}
};
