//point free
//Hello World --> hello_world
//转换小写 --> 字符串替换

const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)

f('Hello World')

//把一个字符串中的首字母提取，并转换为大写，使用.做分隔符
//world wild web --> W.W.W
//用空格切割字符串 --> 数组中的每一个元素转化大写 --> 把数组中每项的第一个字符取出 --> join链接

// const firstLetterToUpper = fp.flowRight(fp.join('.'),fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))
//中间两个参数都是map，对数组进行了两次遍历，所以可以进行优化一下
const firstLetterToUpper = fp.flowRight(fp.join('.'),fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))

console.log(firstLetterToUpper('world wild web'))

class Contain {
    static of (value) {
        return new Contain(value)
    }

    constructor (value) {
        this._value = value
    }

    map (fn) {
        return Contain.of(fn(this._value))
    }
}

class Maybe {
    static of (x) {
        return new Maybe(x)
    }

    isNothing () {
        return this._value === null || this._value === undefined
    }

    constructor (x) {
        this._value = x
    }

    map (fn) {
        return this.isNothing() ? this : Maybe.of(fn(this._value))
    }
}

let maybe = Maybe.of([5, 6, 1])
let ex1 = maybe.map(fp.map(item => fp.add(item, 1)))
let xs = Contain.of(['do', 's', 'q', 'w'])
let ex2 = xs.map(fp.first)
let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = { id: 2, name: 'Ab'}
let ex3 = safeProp('name', user).map(fp.first)

let ex4_ = function (n) {
    if(n) {
        return parseInt(n)
    }
}

let ex4 = n => Maybe.of(n).map(parseInt)
console.log(ex4('33'))
