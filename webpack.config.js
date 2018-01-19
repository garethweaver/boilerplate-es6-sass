const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '/src/')
}

module.exports = {
  devServer: {
    contentBase: PATHS.src,
    hot: true,
    inline: true
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
          presets: ['env']
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, 'index.html')
    })
  ]
}
