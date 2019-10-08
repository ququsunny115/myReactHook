const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://140.143.128.100:3000/',
      changeOrigin: true
    })
  )
}