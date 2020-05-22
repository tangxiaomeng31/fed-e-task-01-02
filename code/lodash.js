const _ = require('lodash')

const arr = ['name1', 'name2', 'name3']

// console.log(_.first(arr))
// console.log(_.last(arr))
// console.log(_.toUpper(_.first(arr))) //
// console.log(_.reverse(arr))
// _.each(arr, (item, index) => {
//     console.log(item, index)
// })

function getArea (r) {
    console.log('once')
    return Math.PI * r * r
}
//缓存了getArea这个函数，等于只需要从上面拿一次，接下来的调用都从缓存里拿
// const getAreaWithMemoize = _.memoize(getArea)
// getAreaWithMemoize(3) //once
// getAreaWithMemoize(3)

//模拟memoize方法
function memoize (fn) {
    //将函数名作为key,将函数返回值作为value
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || fn.apply(fn, arguments)
        return cache[key]
    }
}

const getAreaWithMemoize = memoize(getArea)
getAreaWithMemoize(3) //once
