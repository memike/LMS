const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*$|$)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?minimize!postcss'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate'
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      jquery: path.join(process.cwd(), conf.paths.src, 'js/jquery-1.11.3.min.js')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true} // eslint-disable-line camelcase
    }),
    new ExtractTextPlugin('index.[contenthash].css')
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: 'index.[hash].js'
  },
  entry: `./${conf.path.src('index')}`
};
