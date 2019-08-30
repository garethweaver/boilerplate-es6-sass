const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
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

  mode: 'development',

  entry: [
    path.join(PATHS.src, 'app.js')
  ],

  output: {
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, 'index.html')
    })
  ]
}
