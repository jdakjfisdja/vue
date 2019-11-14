'user strict'

// see http:vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports ={
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../docs/index.html'),
        assetsRoot: path.resolve(__dirname, '../docs'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionSOurceMap: true,
        productionGzip: false,
        productionGzipExtensions:['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev:{
        env: require('./dev.env'),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable:{},
        cssSourceMap: false
    }
}