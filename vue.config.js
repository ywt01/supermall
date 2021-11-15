module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        '@': 'src',
        'assets': '@/assets',
        'common': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}