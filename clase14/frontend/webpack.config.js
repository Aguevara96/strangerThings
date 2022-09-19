const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    // path: path.resolve('/cursos/strangerThings/clase14/backend/public'),
    path: path.resolve('/xampp/htdocs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

module.exports = config;