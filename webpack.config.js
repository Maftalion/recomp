const path = require('path');

module.exports = {
  context: __dirname,
  entry: './client/components/app.jsx',
  output: {
    path: path.join(__dirname, '/client'),
    filename: 'bundle.js',
    publicPath: '/client/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
