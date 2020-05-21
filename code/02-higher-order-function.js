//模拟常用高阶函数：map every some

//map
const map =  (arr, fn) => {
    let res = []
    for (const item of arr) {
        res.push(fn(item))
    }
    return res
}

let arr = [1,2,3,4]
arr = map(arr, (v) => v*v)

//every 数组里所有值都符合条件才返回
const every = (arr, fn) => {
    let result = true
    for (const iterator of arr) {
        if(!fn(iterator)) {
            result = false
            break
        }
    }
    return result
}

//some
const some = (arr, fn) => {
    let result = false
    for (const iterator of arr) {
        if(fn(iterator)) {
            result = true
            break
        }
    }
    return result
}