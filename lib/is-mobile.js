'use strict'

const { segments } = require('../internal/mobile')

/**
 * @description Judge is whether mobile number or not, and return provider if true.
 * @author lakca<912910011@qq.com>
 * @param {string|number} strOrNum
 * @returns false|cmcc|cucc|ctcc
 */
module.exports = function isMobile(strOrNum) {
  const str = strOrNum.toString()
  if (str.length !== 11)
    return false
  const seg = +str.slice(0, 3)
  for (const provider in segments)
    if (segments[provider].includes(seg))
      return provider
}

module.exports.provider_segments = JSON.parse(JSON.stringify(segments))
