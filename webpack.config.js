const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
		module: {
		rules: [
			{
				test:/\.scss$/,
				use:ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test:/\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins:[
	new ExtractTextPlugin('style.css')
	]
}

module.exports = config;