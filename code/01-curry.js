//柯里化

// function checkAge (age) {
//     //硬编码
//     let min = 18
//     return age >= min
// }

function checkAge (min, age) {
    return age >= min
}
//以下输出中可能会有经常复用的值，所以可以改进成闭包解决
console.log(checkAge(18, 20))
console.log(checkAge(18, 10))
console.log(checkAge(18, 23))
console.log(checkAge(13, 20))

// function checkAge2 (min) {
//     return function (age) {
//         return age >= min
//     }
// }
let checkAge2 = (min) => ((age) => age >= min)
let min_18 = checkAge2(18)
min_18(24)
min_18(22)