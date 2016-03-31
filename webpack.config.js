var path = require("path");

module.exports = {
  context: path.resolve(__dirname + '/src'),

  entry: {
    filename: './App.jsx'
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
    publicPath: '/dist/'
  },

  devServer: {
    inline: true,
    port: 8000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: __dirname + '/src',
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.scss$/,
        include: /src/,
        loaders: ['style', 'css', 'sass']
      }
    ],
  }
};