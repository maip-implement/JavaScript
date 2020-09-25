var arr = [1,2, 3, 4, 5, 6 , 76, 6, 6];

var sum = 0;
arr.forEach(function(value, index, array){
    sum += value
})


// Implementation
function forEach(arr, cbFunc){
    for(i = 0; i < arr.length; i++){
        cbFunc(arr[i], i, arr)
    }
}

var sum2 = 0;
forEach(arr, function(value, index, array){
    console.log(value, index, array)
    sum2 += value
})

console.log(sum)
console.log(sum2)