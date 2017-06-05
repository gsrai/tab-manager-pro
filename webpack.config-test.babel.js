var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', exclude: /(node_modules|bower_components)/ }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'stage-1'],
          plugins: [
            'react-html-attrs',
            'add-module-exports',
            'transform-class-properties', 
            'transform-decorators-legacy',
            'transform-async-to-generator'
          ],
        }
      }
    ]
  },
  externals: [nodeExternals()],
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true }),
  ],
  target: 'node'
};