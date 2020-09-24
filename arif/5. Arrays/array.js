const arr = [1, 2, 3, 'a', 1.45, 'B']
console.log(arr)  // [1, 2, 3, 'a', 1.45, 'B']
console.log(arr[3])  // a

arr[3] = 'r'
console.log(arr[3])  // r

arr[10] = 'Arif'
console.log(arr)  // [ 1, 2, 3, 'r', 1.45, 'B', <4 empty items>, 'Arif' ]
console.log(arr.length)  // 11

console.log(arr[9])  /// undefined



const arr2 = Array(4, 'a', 3.5)
console.log(arr2)  // [ 4, 'a', 3.5 ]

