// ***** 046 Insert Remove and Replace in Javascript | Stack Learner *****

// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr)

// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]

// arr[3] = 200
// console.log(arr[3])
// arr.unshift(0)
// console.log(arr[0])
// arr.push(9)
// console.log(arr)

//200
// 0
// [
//   0, 1, 2, 3, 200,
//   5, 6, 7, 8,   9
// ]

// arr.splice(3, 0, 9, 10)
// console.log(arr)

// [
//     1, 2, 3, 9, 10,
//     4, 5, 6, 7,  8
//   ]

// arr[3] = undefined
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)

// [ 1, 2, 3, undefined, 5, 6, 7, 8 ]
// [ 1, 2, 3, undefined, 5, 6, 7 ]
//[ 2, 3, undefined, 5, 6, 7 ]

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr.splice(3, 1)
console.log(arr)

arr.splice(3, 1, 33)
console.log(arr)

// [
//     1, 2, 3, 5,
//     6, 7, 8
//   ]

// [
//     1, 2, 3, 33,
//     6, 7, 8
//   ]
  