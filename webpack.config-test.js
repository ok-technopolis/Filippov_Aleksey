var nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node', // in order to ignore built-in modules like path, fs, etc. 
	externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: [/node_modules/],
			loader: "babel-loader",
			query: {
				presets: ['es2015', 'react', 'stage-0', 'stage-1']
			}
		}]
	}
}