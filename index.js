/*!
 * arr-filter-function <https://github.com/tunnckoCore/arr-filter-function>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * Filter array for function values
 * and iterate over them if needed.
 *
 * @name  arrFilterFunction
 * @param  {Array} `<arr>`
 * @param  {Function} `[iterator]`
 * @return {Array} filtered array, containing only functions
 * @api public
 */

module.exports = function arrFilterFunction (arr, iterator) {
  if (!Array.isArray(arr)) {
    throw new TypeError('arr-filter-function expect array')
  }
  if (!arr.length) {
    return []
  }

  var self = this
  var res = []
  var len = arr.length
  var i = -1

  while (i++ < len) {
    var val = arr[i]
    if (typeof val === 'function') {
      res[res.length] = typeof iterator === 'function'
      ? iterator.call(self, val, i, arr)
      : val
    }
  }

  return res
}
