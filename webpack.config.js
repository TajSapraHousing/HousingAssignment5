const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const serverConfig={
    target: 'node',
    entry: './server2.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
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
    entry: './client.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'client_bundle.js',
    },
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
module.exports = [serverConfig, clientConfig];