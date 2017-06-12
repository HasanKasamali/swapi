const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract([
					'css-loader',
					'sass-loader'
				])
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('main.css'),
		new HtmlWebpackPlugin({template: 'index.html'})
	]
};

module.exports = config;