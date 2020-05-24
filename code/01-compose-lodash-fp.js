//lodash-fp
const _ = require('lodash')

//lodash中map方法是数据优先，函数之后
// _.map(['23', '8', '10'], parseInt)

const fp = require('lodash/fp')
//fp方法中map是函数优先
fp.map(parseInt, ['23', '8', '10'])