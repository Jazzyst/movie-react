const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  name: 'client',
  mode: 'development',
  target: 'web',

  entry: [
    './src/client.jsx',
  ].filter(Boolean),
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve('./public'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },

  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    /**
     * This plugin extract CSS into separate files.
     * It creates a CSS file per JS file which contains CSS.
     * It supports On-Demand-Loading of CSS and SourceMaps.
     * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
     */
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      vars: {}
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })
  ].filter(Boolean),
};
