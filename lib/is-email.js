'use strict'

const { validate } = require('isemail')
const { local_testers, popular_domains } = require('../internal/email')

/**
 * @description Check text is whether email address or not.
 * @author lakca<912910011@qq.com>
 * @param {string} text
 * @param {object} [options={}]
 * @param {[string]} [options.tldBlacklist] domains in blacklist are invalid,
 *    either an object lookup table or an array of invalid top-level domains.
 * @param {[string]} [options.tldWhitelist] domains only in whitelist are valid,
 *    either an object lookup table or an array of valid top-level domains.
 * @param {boolean} [options.allowUnicode=true] whether non-ASCII characters are allowed.
 *    Defaults to true per RFC 6530.
 * @param {false|[string]} [options.preciseOnPopular=false] precisely validate on some popular domains(e.g. qq.com).
 *    if is array, the valid elements are 'qq', 'netease', 'neteasevip', 'google', 'sina', 'sinavip'.
 * @returns {boolean}
 */
module.exports = function isEmail(text, options = {}) {
  const opts = Object.assign({
    preciseOnPopular: false
  }, options)

  if (validate(text, {
    errorLevel: false,
    tldBlacklist: opts.tldBlacklist,
    tldWhitelist: opts.tldWhitelist,
    allowUnicode: opts.allowUnicode
  })) {
    if (opts.preciseOnPopular) {
      const parts = text.split('@')
      for (const name of opts.preciseOnPopular) {
        if (popular_domains[name].includes(parts[1]))
          return local_testers[name](parts[0])
      }
    }
    return true
  } else {
    return false
  }
}

module.exports.popular_domains = popular_domains
