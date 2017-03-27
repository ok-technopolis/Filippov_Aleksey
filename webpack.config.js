webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	context: __dirname,
	entry: {
		bundle: ['webpack-dev-server/client', './app/app.js'],
		styles: ['webpack-dev-server/client', './app/style.scss'],
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/static/build',
		library: '[name]'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: '#cheap-module-source-map',
	
	devServer: {
		host: 'localhost',
		port: 8080,
		contentBase: __dirname + '/static/build'
	},
	
	module: {
		loaders: [{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				loader: "babel-loader",
				query: {
					presets: ['es2015', 'react', 'stage-0', 'stage-1']
				}
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			},
			{
				test: /\.scss$/,
				// loader: 'css-loader!resolve-url!sass-loader?sourceMap'
				loader: 'css-loader!sass-loader?sourceMap'
			},
			{
				test: /\.css$/,
				loader: 'css-loader'
			},
			{
				test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		// new ExtractTextPlugin('styles.css', {
		// 	allChunks: true
		// })
	]
};