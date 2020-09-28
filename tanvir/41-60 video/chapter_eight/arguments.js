// ***** 062 Function arguments and parameters in Javascript | Stack Learner

// function add(a,b){
//     var result = a + b
//     console.log(result)
// }
// add(10,20)

// 30


// function sub(a,b){
//     var result = a - b
//     console.log(result)
// }

// sub(40,20)

// 20

var arr1 = [1, 2, 3]
var arr2 = [5, 7, 9]
var arr3 = [9, 7, 1]

// var sum1 = 0
// for(var i = 0; i<arr1.length; i++){
//     sum1 += arr1[i]
// }
// console.log(sum1)

// 6

// var sum2 = 0
// for(var i = 0; i<arr2.length; i++){
//     sum2 += arr2[i]
// }
// console.log(sum2)

// 21

// var sum3 = 0
// for(var i = 0; i<arr3.length; i++){
//     sum3 += arr3[i]
// }
// console.log(sum3)

// 17

function sumOfArray(arr) {
    var sum = 0
    for(var i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)

// 6
// 21
// 1