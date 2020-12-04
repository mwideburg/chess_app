const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: { app: ['babel-polyfill', './src/index.js'] },
  output: {
    path: path.resolve(__dirname, 'dist', 'app', 'assets', 'javascripts'),
    filename: '[name].js',
    library: 'chessboardjsx',
    libraryTarget: 'umd',
    
  },
  devServer: { contentBase: path.resolve(__dirname, 'dist'), port: 3000 },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
});
