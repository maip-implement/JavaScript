const arr = [2, 4, 5]

console.log(arr.join(', '))  // 2, 4, 5

arr.fill(0)
console.log(arr)  // [ 0, 0, 0 ]

const arr2 = ['a', 'b']
const arr3 = arr2.concat(arr)
console.log(arr)  // [ 0, 0, 0 ]
console.log(arr2)  // [ 'a', 'b' ]
console.log(arr3)  // [ 'a', 'b', 0, 0, 0 ]




// check the array
console.log(Array.isArray(arr2))  // true

// copy an array
const newArr = Array.from(arr)
console.log(newArr)  // [ 0, 0, 0 ]
