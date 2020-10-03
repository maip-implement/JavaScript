var arr = [1,2,3,4,5,6,7,8,9,10]

var result = arr.reduce(function(prev, curr){
    return prev + curr
}, 0)
console.log(result)

function myReduce(arr, cb, acc){
    for(let i = 0; i<arr.length; i++){
        acc = cb(acc, arr[i])
    }
    return acc
}