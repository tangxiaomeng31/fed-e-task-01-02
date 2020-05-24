//task处理异步任务
const { task } = require('folktale/concurrency/task')
const fs = require('fs')
const { split, find } = require('lodash/fp')

function readFile (filename) {
    return task(resolver => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) resolver.reject(err)

            resolver.resolve(data)
        })
    })
}

readFile('./package.json')
    .map(split('\n')) //map方法里处理返回结果
    .map(find(x => x.includes('version')))
    .run()
    .listen({
        onRejected: err => {console.log(err)},
        onResolved: data=> {console.log(data)} // "version": "1.0.0",
    })

