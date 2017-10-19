var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

process.env.NODE_ENV = "production";

module.exports = {
  entry: path.join(__dirname, '/app/index'),
  output: {
    path: path.join(__dirname, "/dist/"),
    libraryTarget: "umd",
    filename: "chillisource-web-core.js"
  },

  module: {
    rules: [{
      test: /\.(t|j)sx?$/,
      exclude: /(node_modules|custom_modules)/,
      use: [{
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true
        }
      }]
    }]
  },
  externals: [nodeExternals(
    {
      whitelist: ['lodash-es']
    }
  )],

  plugins: [
    // new webpack.NoErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: () => {
          return [autoprefixer]
        }
      }
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  }
};
