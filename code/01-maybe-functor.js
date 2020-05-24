//maybe函子

class MayBe {
    constructor (value) {
        this._value = value
    }

    static of (value) {
        return new MayBe(value)
    }

    map (fn) {
        return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
    }

    isNothing () {
        return this._value === undefined || this._value === null
    }
}

// let r = MayBe.of('hello')
//             .map(x => x.toUpperCase())
// let r = MayBe.of(undefined)
//             .map(x => x.toUpperCase())
            
// console.log(r)

//无法确定到底是哪次调用出现了问题
let r = MayBe.of('hello')
            .map(x => x.toUpperCase())
            .map(x => null)
            .map(x => x.split(' '))
console.log(r) //MayBe { _value: null }