// ***** 051 what is Object in Javascript | Stack Learner *****

//OBJECT

// ***** 052 Object Literal vs constructor in Javascript | Stack Learner *****


// var obj = {}
// console.log(obj)
// console.log(typeof obj)

// {}
// object

// obj.x = 21
// console.log(obj)

//{ x: 21 }

// var point = {
//     x: 10,
//     y: 20
// }

// console.log(point)

//{ x: 10, y: 20 }

// point.y = 200
// console.log(point)

// { x: 10, y: 200 }

// point.z = 100
// console.log(point)

//{ x: 10, y: 200, z: 100 }

// var obj = Object()
// obj.a = 10
// console.log(obj)

// var obj2 = new Object()
// obj2.b = 10
// console.log(obj2)

//{ a: 10 }
// { b: 10 }


// ***** 053 Accessing Object Properties in Javascript | Stack Learner *****

// var point = {
//     x : 12,
//     y : 34,
//     z : 98
// }

// console.log(point.x)
// console.log(point.y)
// console.log(point.z)
// console.log(point.x + point.y + point.z)

//12
// 34 
// 98 
//144

// console.log(point['x'])
// console.log(point['y'])
// var show = 'z'
// console.log(point[show])

//12
// 34 
// 98 

// ***** 054 Setting Object Properties in Javascript | Stack Learner *****

// var point = {
//     x : 12,
//     y : 34,
//     z : 98
// }

// point.x = 45
// point.a = 12
// console.log(point)
// console.log(point.d)

// { x: 45, y: 34, z: 98, a: 12 }
// undefined

// point['y'] = 100
// var prop = 'z'
// point[prop] = 55
// console.log(point)

//{ x: 12, y: 100, z: 55 }

// ***** 055 Remove Object Properties in Javascript | Stack Learner *****


var point = {
        x : 12,
        y : 34,
        z : 98
    }
point.a = undefined 
console.log(point)

delete point.a
console.log(point)


// { x: 12, y: 34, z: 98, a: undefined }
// { x: 12, y: 34, z: 98 }