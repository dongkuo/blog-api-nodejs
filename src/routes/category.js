const Router = require('koa-router')

const router = new Router({
    prefix: '/categories'
})

// 列取文章分类
router.get('/', ctx => {
    ctx.response.body = 'Get'
})

// 添加文章分类
router.post('/', ctx => {
    ctx.response.body = 'Post'
})

// 删除文章分类
router.delete('/:id', ctx => {
    ctx.response.body = 'Delete'
})

// 修改文章分类
router.put('/:id', ctx => {
    ctx.response.body = 'Update'
})

module.exports = router