// ***** 076 Filter Function in Javascript | Stack Learner *****

// var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

// var filteredArr = arr.filter(function(value){
//     return value % 2 == 0
// })

// console.log(filteredArr)

// [ 4, 8, 6, 4 ]

var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]


function myFilter(arr, cb){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i], i, arr)){
        newArr.push(arr[i])
    
        }
    }
    return newArr
}

console.log(myFilter(arr,function(value){
    return value % 2 == 1
}))
console.log(myFilter(arr, function(value){
    return value > 4

}))

// [ 1, 3, 5, 3, 9 ]
// [ 8, 5, 6, 9 ]