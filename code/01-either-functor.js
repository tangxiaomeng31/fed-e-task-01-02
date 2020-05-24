//either函子

class Left {
    constructor (value) {
        this._value = value
    }

    static of (value) {
        return new Left(value)
    }

    map (fn) {
        return this
    }
}

class Right {
    constructor (value) {
        this._value = value
    }

    static of (value) {
        return new Right(value)
    }

    map (fn) {
        return Right.of(fn(this._value))
    }
}

// const r1 = Right.of(12).map(x => x + 2)
// const r2 = Left.of(12).map(x => x + 2)

// console.log(r1) //Right { _value: 14 }
// console.log(r2) //Left { _value: 12 }

function pareJSON (str) {
    try {
        return Right.of(JSON.parse(str))
    } catch (e) {
        return Left.of({error: e.message})
    }
}

let r = pareJSON('{ name: zx}')
console.log(r) //Left { _value: { error: 'Unexpected token n in JSON at position 2' } }

let r1 = pareJSON('{ "name": "zx"}')
            .map(x => x.name.toUpperCase())
console.log(r1) //Right { _value: 'ZX' }