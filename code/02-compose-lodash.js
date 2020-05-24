const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

const f = _.flowRight(toUpper, first, reverse)

console.log(f(['one', 'two']))

//模拟flowRight
// function componse (...args) {
//     return function (value) {
//         return args.reverse().reduce(function (acc, fn) {
//             return fn(acc)
//         }, value)
//     }
// }

const componse = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value)