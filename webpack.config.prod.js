const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
  dist: path.join(__dirname, '/dist/'),
  src: path.join(__dirname, '/src/')
}

module.exports = {
  entry: [
    path.join(PATHS.src, 'app.js')
  ],
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax')
      },
      {
        test: /\.js$/,
        include: /js/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
