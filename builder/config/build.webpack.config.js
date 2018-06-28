import webpack from 'webpack';
import path from 'path';
import babelConfig from './babel.config.js';
import {dateTime} from '../modules/print.js';

import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';

function title(str) {
  return str.replace(/(^[a-z]|\s[a-z])/g, ($1) => $1.toUpperCase());
}

let args = global.args || {};

export default(name, config) => {
  let finalConfig = merge({
    mode: process.env.NODE_ENV,
    stats: 'verbose',
    devtool: false,
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      namedChunks: true,
      namedModules: true,
      splitChunks: {}
    },
    /*resolve: {
      alias: {
        '@matierl-ui/core': '@material-ui/core/index.es.js'
      }
    },*/
    resolveLoader: {
      alias: {
        //needed to support requirejs module
        text: "text-loader"
      }
    },
    externals: {
      jquery: "jQuery",
      'react': 'React',
      'react-dom': 'ReactDom',
      'react-redux': 'ReactRedux',
      'redux': 'Redux'
    },
    output: {
      filename: "[name].min.js",
      chunkFilename: "[name].js",
      jsonpFunction: "webpackJsonp",
      publicPath: ""
    },
    module: {
      rules: [
        {
          test: /(\.js|\.jsx)$/,
          use: {
            loader: "babel-loader",
            options: babelConfig
          },
          exclude: /(node_modules)/
        }
      ]
    },
    plugins: [new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      })]
  }, config);

  if (!!args.report == true) {
    finalConfig.plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: path.resolve(`./reports/${title(name)}${title(process.env.NODE_ENV)}Report${dateTime()}.html`)
    }));
  }

  return finalConfig;
}
