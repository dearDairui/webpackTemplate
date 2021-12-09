module.exports = {

  output: {
    filename: 'buildFile/[name].bundle.js',
    publicPath: '/',
  },
  // cheap-module-source-map
  devtool: 'inline-source-map',
  mode: 'development',
  // mode: 'production',
  devServer: {
    static: './dist',
    open: true,
    compress: true,
    port: 3000,
    // 两个热加载的配置
    // hot:true,
    // liveReload:true,
    headers: {
      'X-Access-Token': 'abs123',
    },
    proxy: {
      '/api': 'http://localhost:9000',
    },
    // 自己的电脑作为服务机器
    // host:'0.0.0.0',
    historyApiFallback: true,
    // http2:true,
    // https:true,
    // https:{
    //     cacert:'./server.pem',
    //     pfx:'./sever.pfx',
    //     key:'./server.key',
    //     cert:'./server.crt',
    //     passphrase:'webpack-dev-server',
    //     requestCert:true
    // }
  },
}
