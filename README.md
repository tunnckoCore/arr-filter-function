# [arr-filter-function][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Fast filter array to have only function values. But also allow you to give iterator function which will be called on each element of the array that is function - much like array.map functionallity. Useful when you want to filter, but also want to map in same time.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i arr-filter-function --save
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [arrFilterFunction](./index.js#L21)
> Filter array for function values and iterate over them if needed.

* `<arr>` **{Array}**    
* `[iterator]` **{Function}**    
* `returns` **{Array}**: filtered array, containing only functions  

**Example**

```js
var arrFilterFunction = require('arr-filter-function')

function fn1 () {}
function fn2 () {}
function fn3 () {}

var arr = arrFilterFunction([fn2, 'abc', [1, 2, [fn3, 3]], fn1])
//=> [fn2, fn1]
```

Or you can given `iterator` function which will be called on each element of array.

```js
var arrFilterFunction = require('arr-filter-function')

function fn1 () {}
function fn2 () {}
function fn3 () {}

var arr = [{foo: 'bar'}, [fn1, 1, 2], fn3, fn2]
var res = arrFilterFunction(arr, function (fn) {
  return fn
})
//=> [fn3, fn2]
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/arr-filter-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/arr-filter-function
[npmjs-img]: https://img.shields.io/npm/v/arr-filter-function.svg?label=arr-filter-function

[license-url]: https://github.com/tunnckoCore/arr-filter-function/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/arr-filter-function
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/arr-filter-function.svg

[travis-url]: https://travis-ci.org/tunnckoCore/arr-filter-function
[travis-img]: https://img.shields.io/travis/tunnckoCore/arr-filter-function.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/arr-filter-function
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/arr-filter-function.svg

[david-url]: https://david-dm.org/tunnckoCore/arr-filter-function
[david-img]: https://img.shields.io/david/tunnckoCore/arr-filter-function.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
