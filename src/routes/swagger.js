/*
==================================================
Swagger Open API.

@author derker
@date 2018-08-15 23:41:20
@see: https://swagger.io/docs/specification/about/
==================================================
 */

const path = require('path')
const Router = require('koa-router')
const swaggerJSDoc = require('swagger-jsdoc')
const config = require('../config')

const router = new Router()
const BASE_URL = `/api/v1/swagger`


// -- setup up swagger-jsdoc --
const swaggerDefinition = {
  info: {
    title: '博客API',
    version: '1.0.0',
    description: 'NodeJS 实现的博客API. https://github.com/dongkuo/blog-api-nodejs',
  },
  host: `${config.host}:${config.port}`,
  basePath: `${config.prefix}`,
}
const options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, 'category.js')],
}
const doc = swaggerJSDoc(options)

router.get(BASE_URL, async ctx => {
  ctx.body = doc
})

module.exports = router


