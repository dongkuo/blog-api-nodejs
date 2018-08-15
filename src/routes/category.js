const Router = require('koa-router')
const queries = require('../db/queries/category')
const config = require('../config')

const router = new Router()
const BASE_URL = `${config.prefix}/categories`

/**
 * @swagger
 * definitions:
 *   Category:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *       name:
 *         type: string
 *       url:
 *         type: string
 */


/**
 * @swagger
 * /categories:
 *   get:
 *     summary: 获取分类列表
 *     description: 返回全部分类，不带分页
 *     produces:
 *       - application/json
 *     tags:
 *       - categories
 *     responses:
 *       200:
 *         description: 分类列表
 *         schema:
 *           type: object
 *           properties:
 *             categories:
 *               type: array
 *               description: 全部分类
 *               items:
 *                 $ref: '#/definitions/Category'
 */
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
    const category = await queries.getSingleCategory(ctx.params.id)
    ctx.body = {
      status: 'success',
      data: category
    }
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