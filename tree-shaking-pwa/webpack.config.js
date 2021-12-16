const HtmlWebapckPlugin = require('html-webpack-plugin');
const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve('./src/app.js'),
  // devtool: 'inline-source-map',
  plugins: [
    new HtmlWebapckPlugin({
      template: './index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  // 摇树
  optimization: {
    usedExports: true,
  },
}
