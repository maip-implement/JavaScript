var arr = [1, 2, 3, 4,7 ,5]

var sqrArr = arr.map(function(value){
    return value * value
})

console.log(arr)
console.log(sqrArr)


// implementation
function map(arr, cbFunc){
    var newArr = []
    for(i = 0; i < arr.length; i++){
        var temp = cbFunc(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = map(arr, function(value){
    return value * value * value;
})

var mTen = map(arr, function(value){
    return value * 10
})

console.log(arr)
console.log(qb, mTen)



//Difference between forEach and map method is forEach will change the original array and map will create a different array from the original one.