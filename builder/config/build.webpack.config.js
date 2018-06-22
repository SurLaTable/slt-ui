import webpack from 'webpack';
import path from 'path';
import babelConfig from './babel.config.js';
console.log(process.env.NODE_ENV);
export default {
  mode: process.env.NODE_ENV,
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    namedChunks:true,
    splitChunks: {
      chunks: 'async',
      name:'common'
    }
  },
  resolve: {
    alias:{
      '@matierl-ui/core' : '@material-ui/core/index.es.js'
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
    path: path.resolve('./build/'),
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
        //exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [

  ]
};
