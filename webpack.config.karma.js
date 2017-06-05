var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  module: {
    devtool: 'inline-source-map',
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', exclude: /(node_modules|bower_components)/ }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'stage-1', 'airbnb'],
          plugins: [
            'react-html-attrs',
            'transform-class-properties', 
            'transform-decorators-legacy',
            'transform-async-to-generator'
          ],
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true }),
  ]
};