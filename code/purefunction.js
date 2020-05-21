//纯函数和不纯函数
//slice  splice
let arr = [1, 2, 3, 5]
//纯函数：相同输入，相同的输出
arr.slice(0, 2)
arr.slice(0, 2)
arr.slice(0, 2)
//不纯函数：相同的输入，不同的输出
arr.splice(0, 1)
arr.splice(0, 1)
arr.splice(0, 1)