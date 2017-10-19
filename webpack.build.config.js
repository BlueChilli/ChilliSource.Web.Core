var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
  externals: {
    "immutable": {
      commonjs: "immutable",
      commonjs2: "immutable",
      amd: "immutable",
      root: "Immutable"
    },
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },

    "react-dom/server": {
      commonjs: "react-dom/server",
      commonjs2: "react-dom/server",
      amd: "react-dom/server",
    },

    "moment": {
      commonjs: "moment",
      commonjs2: "moment",
      amd: "moment",
      root: "Moment"
    },
  },

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
