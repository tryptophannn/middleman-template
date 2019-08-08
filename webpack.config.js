var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './source/script/main.js'
  },

  resolve: {
    modules: [__dirname + '/source/script', 'node_modules'],
    extensions: ['.js','.jsx']
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'script/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }
    ],
  },

  node: {
    console: true,
  },

  plugins: [
    new Clean(['.tmp']),
    // Declare Global variables
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   Cookies: 'js-cookie',
    // }),
  ],
};