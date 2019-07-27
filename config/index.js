
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: require('./dev.env'),
        port: 9088,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/slsAdminApi': {
                  target: 'http://39.106.41.57:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/slsAdminApi': ''
                }
            }
        },
        cssSourceMap: false
    }
}
