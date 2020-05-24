//IO函子
const fp = require('lodash/fp')
const fs = require('fs')

class IO {
    constructor (fn) {
        this._value = fn
    }

    static of (value) {
        return new IO(function () {
            return value
        })
    }

    map (fn) {
        return new IO(fp.flowRight(fn, this._value))
    }

    join () {
        return this._value()
    }

    flatMap (fn) {
        return this.map(fn).join()
    }
}

//读取文件操作，由于读取文件操作会有副作用，所以用IO函子处理
function readFile (filename) {
    return new IO(function () {
        return fs.readFileSync(filename, 'utf-8')
    })
}

function print (x) {
    return new IO(function () {
        console.log(x)
        return x
    })
}

const r = readFile('package.json')
            .flatMap(print)
            .join()