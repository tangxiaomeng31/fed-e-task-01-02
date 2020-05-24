//lodash中curry方法原理模拟

function curry (func) {
    return function curriedFn(...args) {
        //判断形参跟实参的个数
        if(args.length < func.length) {
            //实参的个数小于形参的个数
            return function () {
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        return func(...args)
    }
}

function getSum (a, b, c) {
    return a + b + c
}

const curried = curry(getSum)

console.log(curried(1, 2, 3)) //6
console.log(curried(1, 2)(4)) //7
console.log(curried(1)(4, 5)) //10