// ***** 050 Array Methods in Javascript | Stack Learner *****

// var arr = [34, 5, 3, 7]
// var arr2 = [2, 5, 6, 8]

// console.log(arr.join(', '))

//34, 5, 3, 7

// arr.fill(0)
// console.log(arr)

//[ 0, 0, 0, 0 ]

// var arr3 = arr.concat(arr2)
// console.log(arr3)

//[
//     34, 5, 3, 7,
//     2, 5, 6, 8
//  ]

// console.log(Array.isArray(arr))
//true

var a = [1, 5]
var b = Array.from(a)
b[0] =  80

console.log(a)
console.log(b)

// [ 1, 5 ]
// [ 80, 5 ]
