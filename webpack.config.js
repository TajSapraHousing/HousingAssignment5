const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const serverConfig={
    target: 'node',
    entry: './server2.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool:'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/Users/tajsapra/Desktop/Training Assignments/Assignment 5/node_modules',
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        } 
      ],
    },
  }
  const clientConfig={
    target: 'web',
    mode:'development',
    entry: './client.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'client_bundle.js',
      chunkFilename:'[name].client_bundle.js',
    },
    devtool:'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/Users/tajsapra/Desktop/Training Assignments/Assignment 5/node_modules',
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
        },
      },
    }
  }
module.exports = [serverConfig, clientConfig];