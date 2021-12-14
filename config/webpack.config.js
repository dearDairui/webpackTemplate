const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common')
const proConfig = require('./webpack.config.pro')
const preConfig = require('./webpack.config.dev')

module.exports = (env) => {
  switch (true) {
    case env.production:
      return merge(commonConfig, proConfig)

    case env.developement:
      return merge(commonConfig, preConfig)

    default:
      return new Error('no match schame')
  }
}
