import webpack from 'webpack';
import path from 'path';
import babelConfig from './babel.config.js';
import {dateTime} from '../modules/print.js';

import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';

function title(str){
  return str.replace(/(^[a-z]|\s[a-z])/g,($1)=>$1.toUpperCase());
}

export default (name,config)=>{
  return merge({
    mode: process.env.NODE_ENV,
    stats: 'verbose',
    devtool: false,
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      namedChunks: true,
      namedModules: true,
      splitChunks: {

      }
    },
    resolve: {
      alias: {
        '@matierl-ui/core': '@material-ui/core/index.es.js'
      }
    },
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
          test: /\.html$/,
          use: {
            loader: "html-loader",
            options: {
              removeComments: false
            }
          }
        }, {
          test: /(\.js|\.jsx)$/,
          use: {
            loader: "babel-loader",
            options: babelConfig
          },
          exclude: /(node_modules)/
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      })
    ]
  },config,{
    plugins:[
      new BundleAnalyzerPlugin({
        analyzerMode:"static",
        openAnalyzer:process.env.NODE_ENV === 'development',
        reportFilename:path.resolve(`./reports/${title(name)}${title(process.env.NODE_ENV)}Report${dateTime()}.html`)
      })
    ]
  });
}
