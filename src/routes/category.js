const Router = require('koa-router')
const queries = require('../db/queries/category')

const router = new Router()
const BASE_URL = `/api/v1/category`


// 列取文章分类
router.get(BASE_URL, async ctx => {
  try {
    const categories = await queries.getAllCategory()
    ctx.body = {
      status: 'success',
      data: categories
    }
  } catch (err) {
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const category = await queries.getSingleCategory(ctx.params.id);
    ctx.body = {
      status: 'success',
      data: category
    };
  } catch (err) {
    console.log(err)
  }
})

// 添加文章分类
router.post('/', async ctx => {
  ctx.response.body = 'Post'
})

// 删除文章分类
router.delete('/:id', async ctx => {
  ctx.response.body = 'Delete'
})

// 修改文章分类
router.put('/:id', async ctx => {
  ctx.response.body = 'Update'
})

module.exports = router