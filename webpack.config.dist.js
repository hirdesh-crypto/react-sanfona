module.exports = {
  entry: './src/createReactSanfona.js',

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel?loose=all', exclude: /node_modules/ }
    ]
  },

  externals: {
    react: 'react'
  },

  output: {
    filename: 'dist/react-sanfona.js',
    libraryTarget: 'umd',
    library: 'ReactSanfona'
  }
};