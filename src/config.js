/*
==================================
配置

@author derker
@date 2018-08-16 00:00
==================================
 */

const config = {
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 3000,
  prefix: '/v1'
}

module.exports = config