const _ = require('lodash')

function getSum (a, b, c) {
    return a + b + c
}

const curried = _.curry(getSum)

console.log(curried(1, 2, 3)) //6
console.log(curried(1, 2)(4)) //7
console.log(curried(1)(4, 5)) //10

//柯里化案例
// ''.match(/\s+/g)
// ''.match(/\d+/g)
/**
 * 
 * @param {*} res 正则表达式
 * @param {string} str 字符串
 */
// function match (res, str) {
//     return str.match(res)
// }
const match = _.curry(function (res, str) {
    return str.match(res)
})
const haveSpace = match(/\s+/g)
console.log(haveSpace('hello world'))

const filter = _.curry(function (func, arr) {
    return arr.filter(func)
})
//用来过滤含有空格的字符
console.log(filter(haveSpace, ['h a', 'aa']))
const findSpace = filter(haveSpace)
console.log(findSpace(['h a', 'aa']))