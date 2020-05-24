//函子

// class Container {
//     constructor (value) {
//         this._value = value
//     }

//     map (fn) {
//         return new Container(fn(this._value))
//     }
// }


// let r = new Container(5)
//     .map(x => x + 1)
//     .map(x => x + 2)

class Container {
    constructor (value) {
        this._value = value
    }

    static of (value) {
        return new Container(value)
    }

    map (fn) {
        return Container.of(fn(this._value))
    }
}

let r = Container.of(5)
            .map(x => x * x)