//NEVER SAY DIE -->  never-say-die
const _ = require('lodash')
//先转换为数组，并且把数组中的数据转为小写，最后用split链接起来
//由于函数组合好每一个函数都只有一个参数，所以将split跟join柯里化
const split = _.curry((sep, str) => _.split(str, sep))
const join = _.curry((sep, arr) => _.join(arr, sep))

//定于debug函数
const v = (value) => {
    console.log(value)
    return value
}

const map = _.curry((func, arr) => _.map(arr, func))

const f = _.flowRight(join('-'), map(_.toLower), split(' '))

console.log(f('NEVER SAY DIE'))