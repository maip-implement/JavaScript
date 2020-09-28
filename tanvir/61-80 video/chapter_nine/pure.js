//***** 069 Pure Functions in Javascript | Stack Learner *****

function sqr(n){
    return n*n
}

console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))

// 9
// 9
// 9

// var n = 10

// function change(){
//     n = 100
// }

// change()
// console.log(n)

// 9
// 9  
// 9  
// 100

var point = {
    x: 45,
    y: 30
}

function printPoint(point){
    point.x = 100
    point.y = 200

    console.log(point)
}

printPoint(point)

console.log(point)

// { x: 100, y: 200 }
// { x: 100, y: 200 }