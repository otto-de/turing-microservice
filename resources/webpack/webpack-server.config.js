import fs from 'fs';

import path from 'path';
const nodeModulesPath = path.resolve(__dirname, '../../node_modules');

const nodeModules = {};
const notFound = -1;
fs.readdirSync(nodeModulesPath)
  .filter((folder) => folder.indexOf('.bin') === notFound)
  .forEach((module) => {
    nodeModules[module] = `commonjs ${module}`;
  });

export default {
  target: 'node',
  cache: false,
  debug: false,
  devtool: 'source-map',
  entry: [path.resolve(__dirname, '../../src/server/server.js')],
  output: {
    path: path.resolve(__dirname, '../../target/server'),
    filename: 'server.js'
  },
  externals: nodeModules,
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: nodeModulesPath
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      }
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js'
    ]
  },
  node: {
    __dirname: true
  }
};