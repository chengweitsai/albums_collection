var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client', // 這多一個 hot reload 的 code entry
    './src/index.js',  // 進入點
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',  // 輸出的檔案名稱
    publicPath: '/public/',
  },
  module: {
    loaders: [{
      test: /\.js$/,   // 針對 js 檔
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/   // 不要處理 3rd party 的 code

    }, {
      test: /\.css$/,  // 針對 css 檔
      loaders: ['style', 'css'],
      
    },]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ], 
};
