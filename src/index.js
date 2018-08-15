const Koa = require('koa')
const config = require('./config')
const swagger = require('./routes/swagger')
const category = require('./routes/category')
const path = require('path')

const app = new Koa()

// 静态资源
app.use(require('koa-static')(path.resolve(__dirname, 'static')));

// swagger 文档
app.use(swagger.routes())

// 文章分类路由
app.use(category.routes())

const server = app.listen({
  host: config.host,
  port: config.port
}, () => {
  console.log(`Server listening on: http://${config.host}:${config.port}`)
})

module.exports = server
