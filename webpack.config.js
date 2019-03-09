const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  node: {
    fs: 'empty'
  },

  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },

  devServer: {
    port: 8080,
    historyApiFallback: true
  },

  devtool: 'source-map',

  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.yaml'
    ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: '/node_modules/'
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.ejs',
      inject: 'body'
    })
  ]
}