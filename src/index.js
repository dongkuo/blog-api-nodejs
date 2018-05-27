const Koa = require('koa')
const app = new Koa()

// 文章分类路由
const category = require('./routes/category')
category.use('/categories', category.routes(), category.allowedMethods())
app.use(category.routes())

app.listen(3000)
