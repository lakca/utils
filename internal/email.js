'use strict'

const isMobile = require('../lib/is-mobile')

// popular public email service domain.
exports.popular_domains = {
  qq: [
    'qq.com'
  ],
  netease: [
    '163.com',
    '126.com',
    'yeah.net'
  ],
  neteasevip: [
    'vip.163.com'
  ],
  google: [
    'gmail.com'
  ],
  sina: [
    'sina.com',
    'sina.cn'
  ],
  sinavip: [
    "vip.sina.com"
  ]
}

exports.local_testers = {
  qq: str =>
    /^\d{5,11}$/.test(str),

  netease: str =>
    /^[a-z][a-z\d_]{4,16}[a-z\d]$/i.test(str)
    && /[a-z]/.test(str)
    || !!isMobile(str),

  neteasevip: str =>
    /^[a-z][a-z\d._]{4,18}[a-z\d]$/i.test(str)
    && /[a-z]/.test(str)
    || !!isMobile(str),

  google: str =>
    /^[a-z\d][a-z\d.]{4,28}[a-z\d]$/i.test(str)
    && (str.length > 7 && /[a-z]/.test(str) || str.length < 8),

  sina: str =>
    /^[a-z\d][a-z\d_]{2,14}[a-z\d]$/.test(str)
    && /[a-z]/.test(str)
    || !!isMobile(str),

  sinavip: str =>
    /^[a-z\d][a-z\d_]{5,14}[a-z\d]$/.test(str)
    && /[a-z]/.test(str)
    || !!isMobile(str)
}
