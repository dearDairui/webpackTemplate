const CssMini = require('css-minimizer-webpack-plugin')
// 需要压缩代码
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {

  output: {
    filename: 'buildFile/[name].[contenthash].bundle.js',

    // 设置公共路径
    // publicPath:'http://localhost:8080'
  },
  mode: 'production',

  optimization: {
    minimize: true,
    // 要配合使用mode:production使用
    minimizer: [
      // css压缩
      new CssMini(),
      // js代码压缩
      new TerserPlugin({
        exclude: /\/node_modules/,
      }),
    ],

  },
  performance: {
    hints: false,
  },
}
