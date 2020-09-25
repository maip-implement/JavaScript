var arr = [1, 2, 3, 4,7 ,5]

var sqrArr = arr.map(function(value){
    return value * value
})

console.log(arr)
console.log(sqrArr)


// implementation
function map(arr){
    var newArr = []
    for(i = 0; i < arr.length; i++){
        var temp = arr[i] * arr[i]
        newArr.push(temp)
    }
    return newArr
}

console.log(map(arr))


//Difference between forEach and map method is forEach will change the original array and map will create a different array from the original one.