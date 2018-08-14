const Koa = require('koa')
const category = require('./routes/category')

const app = new Koa()
const PORT = process.env.PORT || 3000;

// 文章分类路由
app.use(category.routes())

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
