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