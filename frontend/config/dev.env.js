'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ENDPOINT: '"https://1qwxc7o0oc.execute-api.ap-northeast-1.amazonaws.com/dev"',
})
