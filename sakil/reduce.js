// Reduce method take two value of an iterable abject (array) and produce something like summation or anything else like filter

var arr = [1, 2, 3, 4, 5 ,6, 7, 8, 8, 09]

//Summation of the arr
// var sum1 = arr.reduce(function(prev, curr){
//     return prev + curr
// }, 100)

// var max1 = arr.reduce(function(prev, curr){
//     return Math.max(prev, curr)
// }, 0)

// console.log(sum1, max1)



//Implementation 
function myReduce(array, cbFunc, acc){
    for(var i = 0; i < array.length; i++) {
        acc = cbFunc(acc, array[i])
    }
    return acc
}


var sum = myReduce(arr, function(prev, curr){
    return prev + curr
}, 0)

var max = myReduce(arr, function(prev, curr){
    return Math.max(prev, curr)
}, arr[0])

var min = myReduce(arr, function(prev, curr){
    return Math.min(prev, curr)
}, arr[0])

console.log(sum, max, min)