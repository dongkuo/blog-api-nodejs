const Koa = require('koa')
const category = require('./routes/category')

const app = new Koa()

// 文章分类路由
app.use(category.routes())

app.listen(3000)
