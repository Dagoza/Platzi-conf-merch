const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
/** @type {import('webpack').Configuration} **/

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: '/'
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
            test: /\.(s*)css$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader'
            ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),

      new MiniCssExtractPlugin({
          filename: 'assets/[name].css',
      }),
      new Dotenv(),
      new CopyPlugin({
        patterns: [
          { from: 'public/manifest.json', to: '' },
          { from: 'public/service-worker.js', to: '' },
          { from: 'public/icon.svg', to: 'assets' },
        ],
      }),
    ],
    devtool: 'source-map',
    devServer: {
      static: path.join(__dirname, "dist"),
      compress: true,
      port: 3005,
      historyApiFallback: true
    },
  };