module.exports = api => {
  api.chainWebpack(webpackConfig => {
    if (process.env.NODE_ENV === 'development') {
      webpackConfig
        .devtool('cheap-module-eval-source-map')
        .output
          .publicPath('/')

      webpackConfig
        .plugin('hmr')
          .use(require('webpack/lib/HotModuleReplacementPlugin'))

      webpackConfig
        .plugin('named-modules')
          .use(require('webpack/lib/NamedModulesPlugin'))

      webpackConfig
        .plugin('no-emit-on-errors')
          .use(require('webpack/lib/NoEmitOnErrorsPlugin'))

      webpackConfig
        .plugin('firendly-errors')
          .use(require('friendly-errors-webpack-plugin'))

      webpackConfig
        .plugin('watch-missing')
          .use(
            require('../util/WatchMissingNodeModulesPlugin'),
            [api.resolve('node_modules')]
          )
    }
  })
}
