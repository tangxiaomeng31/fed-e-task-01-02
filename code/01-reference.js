//reference

// let obj = {name: 'xm'}

// let ali = obj
// //obj到{name: 'xm'}的引用断掉了，但是ali依旧指向{name: 'xm'}的引用空间
// obj = null


function objGroup (obj1, obj2) {
    obj1.next = obj2
    obj2.prev = obj1

    return {
        o1: obj1,
        o2: obj2
    }
}

let obj = objGroup({name: 'obj1'}, {name: 'obj2'})
console.log(obj)
