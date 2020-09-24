var arr = [1,2,3,4]
var arr2 = [5,6,7,8]

console.log(arr.join(", "))
arr.fill(0)
var arr3 = arr.concat(arr2)
console.log(arr3)
console.log(Array.isArray(arr2))
var arr3 = [1,2,3,4]
var arr4 = Array.from(arr3)
console.log(arr4)