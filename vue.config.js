module.exports = {
  publicPath: './',
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