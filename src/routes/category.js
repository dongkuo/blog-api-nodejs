const Router = require('koa-router')

const router = new Router()

/**
 * 列取文章分类
 */
router.get('/', ctx => {
    ctx.response.body = 'Get'
})

/**
 * 添加文章分类
 */
router.post('/', ctx => {
    ctx.response.body = 'Post'
})



module.exports = router