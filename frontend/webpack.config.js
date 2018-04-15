const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js',
      'normalize.css',
    ],
    vendor: [
      '98k', 'axios',
    ],
  },
  output: {
    path          : path.resolve(__dirname, '..', 'WebContent'),
    filename      : 'static/[name].js',
    publicPath    : '/Activity',
    chunkFilename : 'static/[name].js',
  },
  resolve: {
    alias: {
    },
  },
  module: {
    rules: [
      {
        use     : ['babel-loader'],
        test    : /\.js$/,
        exclude : /node_modules/,
        include : path.resolve(__dirname, 'src'),
      },
      {
        use  : ['style-loader', 'css-loader?importLoaders=1&modules', 'sass-loader'],
        test : /\.s?css$/,
      },
      {
        use: [{
          loader  : 'url-loader',
          options : {
            limit: 8192,
          },
        }],
        test: /\.(jpe?g|png|gif|svg)$/,
      },
    ],
  },
  devtool : 'source-map',
  plugins : [
    new HtmlWebpackPlugin({
      template : './src/views/index.html',
      inject   : true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
