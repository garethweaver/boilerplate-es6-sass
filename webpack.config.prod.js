const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  dist: path.join(__dirname, '/dist/'),
  src: path.join(__dirname, '/src/')
}

module.exports = {
  mode: 'production',

  entry: [
    path.join(PATHS.src, 'app.js')
  ],

  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader?indentedSyntax'
        })
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({ template: path.join(PATHS.src, 'index.html') })
  ]
}
