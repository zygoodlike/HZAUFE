'use strict'
// Template version: 1.1.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

// 直接硬编码后端地址
const commonProxy = {
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Referer', 'http://nacos:80')  // 直接写死
  },
  target: 'http://nacos:80',  // 直接写死后端地址
  changeOrigin: true
}

module.exports = {
  build: {
    env: require('./prod.env'),
    ojIndex: path.resolve(__dirname, '../dist/index.html'),
    ojTemplate: path.resolve(__dirname, '../src/pages/oj/index.html'),
    adminIndex: path.resolve(__dirname, '../dist/admin/index.html'),
    adminTemplate: path.resolve(__dirname, '../src/pages/admin/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/__STATIC_CDN_HOST__/',
    productionSourceMap: process.env.USE_SENTRY === '1',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 80,  // 直接写死端口
    autoOpenBrowser: false,  // 直接写死，不自动打开浏览器
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/api": commonProxy,
      "/public": commonProxy
    },
    cssSourceMap: false
  }
}