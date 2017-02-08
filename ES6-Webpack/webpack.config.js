var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/main.css');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        client: './src/index.js'
    },

    output: {
        path: path.resolve('build'),
        filename: 'js/[name].js',
        publicPath: '../../build/',
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: extractCSS.extract(['css-loader?minimize', 'sass-loader']),
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|build)/,
                loader: 'babel-loader',
            },
            {
              test: /\.jpg$/,
              loader: "file-loader"
          },
          {
              test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              loader: 'url-loader?limit=100000'
          }
        ],
    },

    resolve: {
        extensions: ['', '.js'],
    },

    plugins: [
        new webpack.ProvidePlugin({
          Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
          fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      }),
      extractCSS,
    ]
};
