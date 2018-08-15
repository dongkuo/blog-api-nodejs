/*
==================================
错误处理

@author derker
@date 2018-08-16 01:05
==================================
 */

const catchError = async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.throw(404)
    }
  } catch (err) {
    const status = err.status || 500;
    ctx.status = status;
    if (status === 404) {
      ctx.body = `Not Found: ${ctx.request.url}`
    } else if (status === 500) {
      ctx.body = "服务器繁忙"
    }
  }
}

module.exports = catchError

