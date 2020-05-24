//函数组合
function compose (f, g) {
    return function (value) {
        //函数组合默认从右到左执行
        return f(g(value))
    }
}

//反转数组
function reverse (arr) {
    return arr.reverse()
}

//获取数组中第一个值
function first (arr) {
    return arr[0]
}

const last = compose(first, reverse)

console.log(last([1,3,5]))
