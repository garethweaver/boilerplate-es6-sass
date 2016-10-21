const path = require('path')

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
        loaders: ['style', 'css', 'sass?indentedSyntax']
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
  }
}
