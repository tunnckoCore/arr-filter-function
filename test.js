/*!
 * arr-filter-function <https://github.com/tunnckoCore/arr-filter-function>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var arrFilterFunction = require('./index')

function fn1 () {}
function fn2 () {}
function fn3 () {}

test('arr-filter-function:', function () {
  test('should filter array to have only function values', function (done) {
    var arr = [fn2, 'abc', [1, 2, [fn3, 3]], fn1]
    var actual = arrFilterFunction(arr)
    var expected = [fn2, fn1]

    test.deepEqual(actual, expected)
    done()
  })
  test('should allow to pass iterator function as second argument', function (done) {
    var arr = [{foo: 'bar'}, [fn1, 1, 2], fn2, fn3]
    var actual = arrFilterFunction(arr, function (fn) {
      return fn
    })
    var expected = [fn2, fn3]

    test.deepEqual(actual, expected)
    done()
  })
  test('should be able to pass context', function (done) {
    var arr = [fn2, 'bar', fn1, 'foo', fn3]
    var actual = arrFilterFunction.call({foo: 'bar'}, arr, function (fn) {
      test.deepEqual(this, {foo: 'bar'})
      return fn
    })
    var expected = [fn2, fn1, fn3]

    test.deepEqual(actual, expected)
    done()
  })
})
