const { compose, curry } = require('folktale/core/lambda')
const { toUpper, first } = require('lodash/fp')

//第一个参数用来指明第二个函数的参数有几个
let f = curry(2, (x, y) => {
    return x + y
})

console.log(f(1, 2))

let c = compose(toUpper, first)
console.log(f(['one, two']))