const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  dist: path.join(__dirname, '/dist/'),
  src: path.join(__dirname, '/src/')
}

module.exports = {
  devServer: {
    contentBase: PATHS.src
  },

  entry: [
    path.join(PATHS.src, 'app.js')
  ],

  output: {
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax']
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
    new HtmlWebpackPlugin({
      template: path.join('./src/', 'index.html')
    })
  ]
}
