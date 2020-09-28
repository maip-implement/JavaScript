// ***** 079 Sort, Some and Every Function in Javascript | Stack Learner

// var persons = [
//     {
//         name: 'A',
//         age: 24
//     },
//     {
//         name: 'B',
//         age: 19
//     },
//     {
//         name: 'C',
//         age: 26
//     },
//     {
//         name: 'D',
//         age: 21
//     }

// ]

// var arr = [3, 5, 6, 7, 3, 1, 1, 5, -3, 1, -5]

// arr.sort()
// console.log(arr)

// persons.sort()

// [
//     -3, -5, 1, 1, 1,
//      3,  3, 5, 5, 6,
//      7
//   ]

// arr.sort(function(a, b){
//     if(a>b){
//         return 1
//     }
//     else if(a<b){
//         return -1
//     }
//     else{
//         return 0
//     }
// })

// console.log(arr)

// persons.sort(function(a, b){
//     if(a.age>b.age){
//         return 1
//     }else if(a.age<b.age){
//         return -1
//     }else{
//         return 0
//     }
// })

// console.log(persons)

// [
//     -5, -3, 1, 1, 1,
//      3,  3, 5, 5, 6,
//      7
//   ]
//   [
//     { name: 'B', age: 19 },
//     { name: 'D', age: 21 },
//     { name: 'A', age: 24 },
//     { name: 'C', age: 26 }
//   ]
  
var arr = [3, 5, 6, 7, 3, 1, 1, 5, -1]


var res1 = arr.every(function(value){
    return value % 2 == 0
})

console.log(res1)

var res2 = arr.every(function(value){
    return value >= 0
})

console.log(res2)

var res3 = arr.some(function(value){
    return value % 2 == 1
})

console.log(res3)

var res4 = arr.some(function(value){
    return value >= 1
})

console.log(res4)

// false
// false
// true 
// true 