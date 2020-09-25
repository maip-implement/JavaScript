var arr = [1, 2, 3, 4, 5 , 6, 7, 8, 8, 09]

var result = arr.find(function(value){
    return value === 8
})

console.log(result) //Return the same number if it is exist in the array


var result2 = arr.findIndex(function(value){
    return value === 8
})

console.log(result2) //Returns index number




//Implementation of find
function myFind(arr, cbFunc){
    for(i = 0; i < arr.length; i++){
        if(cbFunc(arr[i])){
            return arr[i]
        }
    }
}

var res = myFind(arr, function(value){
    return value === 8
})
console.log(res)




// Implementation of findIndex
function myFindIndex(arr, cbFunc){
    for(i = 0; i < arr.length; i++){
        if(cbFunc(arr[i])){
            return i
        }
    }
}

var res2 = myFindIndex(arr, function(value){
    return value === 8
})
console.log(res2)