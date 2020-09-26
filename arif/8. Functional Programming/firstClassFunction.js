// First Class Function

function add(a, b) {
    return a + b
}


// * A Function can be Stored in a Variable
const sum = add
console.log(sum(4, 5))  // 9
console.log(typeof sum)  // function


// * A Function can to Stored in an Array
const arr = []
arr.push(add)
console.log(arr)  // [ [Function: add] ]
console.log(arr[0](5, 3))  // 8


// * A Function can to Stored in an Object
const obj = {
    sum: add
}
console.log(obj)  // { sum: [Function: add] }
console.log(obj.sum(7, 9))  // 16


// * We can Create Function as Need
setTimeout(function () {
    console.log('setTimeout')  // setTimeout
}, 100)


// * We can Pass Function as an Arguments



// * We can return Functions from Another Function

