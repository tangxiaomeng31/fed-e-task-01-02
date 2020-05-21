//高阶函数-函数作为参数

/**
 * 遍历数组，对每个Item进行一些不确定的操作
 * @param {array} array 数组
 * @param {function} fn 操作函数
 */
function forEach (array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}
let arr = [1,23,5]
forEach(arr, function (item) {console.log(item)})


function filte (arr, fn) {
    var res = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(fn(element)) {
            res.push(element)
        }
    }
    return res
}

//只执行一次的函数
function once (fn) {
    let done = false
    return function () {
        if(!done) {
            done = true
            return fn.apply(this, arguments)
        }
    }
}

let pay = once(function(moeny) {
    console.log(moeny)
})

pay(5)
