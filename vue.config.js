const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [new VuetifyLoaderPlugin()],
  },
  devServer: {
    disableHostCheck: true,
    proxy: 'http://localhost:80'
  },
}
