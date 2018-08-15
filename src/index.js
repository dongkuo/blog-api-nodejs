const Koa = require('koa')
const path = require('path')
const config = require('./config')
const swagger = require('./routes/swagger')
const category = require('./routes/category')
const error = require('./routes/error')

const app = new Koa()

// 静态资源
app.use(require('koa-static')(path.resolve(__dirname, 'static')));

// swagger 文档
app.use(swagger.routes())

// 文章分类路由
app.use(category.routes())

// 错误路由
app.use(error)

const server = app.listen({
  host: config.host,
  port: config.port
}, () => {
  console.log(`Server listening on: http://${config.host}:${config.port}`)
})

module.exports = server
