/*!
 * arr-filter-function <https://github.com/tunnckoCore/arr-filter-function>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = function arrFilterFunction (arr, iterator) {
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
