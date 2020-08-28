const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.commons.js');

const i18nLoaderMockPath = path.resolve(__dirname, 'test', 'config', 'mocks', 'i18n-loader.js');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  entry: './src/index.test.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle-test.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /node_modules\/esn-frontend-common-libs\/src\/frontend\/js\/modules\/i18n\/i18n-loader.service.js/,
      i18nLoaderMockPath
    ),
  ]
});
