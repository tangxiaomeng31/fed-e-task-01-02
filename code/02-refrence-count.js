//引用计数算法

const user1 = {age: 11}
const user2 = {age: 12}
const user3 = {age: 13}

const nameList = [user1.age, user2.age, user3.age]

function fn () {
    //没有变量声明，直接被挂载到了window对象
    // num1 = 1
    // num2 = 2

    //内部声明了变量，当fn执行之后，num1,num2的引用计数为0
    const num1 = 1
    const num2 = 2
}

fn()

function fn1() {
    const obj1 = {}
    const obj2 = {}
    //由于有互相指引的关系，所以引用计数不为0
    obj1.name = obj2
    obj2.name = obj1

    return true
}
fn1()