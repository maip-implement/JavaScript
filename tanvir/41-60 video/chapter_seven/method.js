// ***** 058 Object Methods in Javascript | Stack Learner *****

var obj = {

    x: 23,
    y: 26,
    z: 28,
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// [ 'x', 'y', 'z' ]
// [ 23, 26, 28 ]
//[ [ 'x', 23 ], [ 'y', 26 ], [ 'z', 28 ] ]

// var obj2 = obj
// obj2.x = 60
// obj2.y = 30

// console.log(obj)
// console.log(obj2)

var obj2 = Object.assign({},obj)
obj2.x = 899

console.log(obj)
console.log(obj2)

// { x: 23, y: 26, z: 28 }
// { x: 899, y: 26, z: 28 }