const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/App.jsx'],
    vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router'],
  },
  output: {
    // path: path.join(__dirname, 'static'),
    path: path.resolve(__dirname, 'static'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, 'static'),
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000'
      }
    }
  },
  plugins: [],
  devtool: 'source-map',
};