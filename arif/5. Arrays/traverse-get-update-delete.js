// Increase array value by 3
const arr = [3, 2, 4, 7, 5]
console.log(arr)  // [ 3, 2, 4, 7, 5 ]

for (let i=0; i<arr.length; i++) {
    arr[i] += 3
}

console.log(arr)  // [ 6, 5, 7, 10, 8 ]





// Insert value on array
const arr1 = [1, 2, 3, 4, 5]

arr1.push(10)
console.log(arr1)  // [ 1, 2, 3, 4, 5, 10 ]

arr1.unshift(11)
console.log(arr1)  // [ 11, 1, 2, 3, 4, 5, 10 ]

arr1.splice(4, 0, 50, 60, 70)  // start, delete count, add elements (here start=4, number of delete element=0 and add new elements=50,60,70)
console.log(arr1)  // [ 11, 1, 2, 3, 50, 60, 70, 4, 5, 10 ]




// Remove value from array
const arr2 = [1, 2, 3, 4, 5]

arr2[2] = undefined
console.log(arr2)  // [ 1, 2, undefined, 4, 5 ]

arr2.pop()
console.log(arr2)  // [ 1, 2, undefined, 4 ]

arr2.shift()
console.log(arr2)  // [ 2, undefined, 4 ]

arr2.splice(1, 1)  // start, delete count
console.log(arr2)  // [ 2, 4 ]




// Update value from array
const arr3 = [1, 2, 3, 4, 5]

arr3[2] = 10
console.log(arr3)  // [ 1, 2, 10, 4, 5 ]

arr3.splice(2, 1, 20)
console.log(arr3)  // [ 1, 2, 20, 4, 5 ]
