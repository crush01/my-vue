const Timestamp = new Date().getTime()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
let plugins = [
  new MiniCssExtractPlugin({
    // 修改打包后css文件名
    filename: `css/[name].${process.env.NODE_ENV}.${Timestamp}.css`,
    chunkFilename: `css/[name].${process.env.NODE_ENV}.${Timestamp}.css`
  })
]
module.exports = {
  // 输出文件目录
  outputDir: 'dist',
  // 打包时是否生成.map
  productionSourceMap: process.env.NODE_ENV === 'development',
  devServer: {
    port: 9999,
    proxy: {
      // 老的创想云Golang接口
      '/api': {
        target: 'http://2-model-admin-dev.crealitygroup.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        },
        logLevel: 'debug'
      }
    }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    // set第一个参数：设置的别名，第二个参数：设置的路径
    // config.resolve.alias.set('@', resolve('./src'))

    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 要公用的scss的路径
          resources: ['./src/assets/styles/utils.scss']
        })
        .end()
    })
  },
  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${process.env.NODE_ENV}.${Timestamp}.js`,
      chunkFilename: `js/[name].${process.env.NODE_ENV}.${Timestamp}.js`
    },
    plugins: plugins
  }
}
