// ***** 075 Map Function in Javascript | Stack Learner

// var arr = [1, 2, 3]

// var sqrArr = arr.map(function(value){
//     // return Math.random() * 100
//     return value * value
// })

// console.log(arr)
// console.log(sqrArr)

// [ 1, 2, 3 ]
// [ 1, 4, 9 ]

// function myMap(arr){
//     var newArr = []
//     for(var i = 0 ; i < arr.length; i++ ){
//         var temp = arr[i] * arr[i]
//         newArr.push(temp)
//     }
//     return newArr
// }

// console.log(myMap(arr))

// [ 1, 4, 9 ]

var arr = [1, 2, 3, 4, 5]

function myMap(arr, cb){
    var newArr = []
    for(var i = 0 ; i < arr.length; i++ ){
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = myMap(arr, function(value){
    return value * value * value
})

var mten = myMap(arr, function(value){
    return value * 10
})

console.log(arr)
console.log(qb)
console.log(mten)


// [ 1, 2, 3, 4, 5 ]
// [ 1, 8, 27, 64, 125 ] 
// [ 10, 20, 30, 40, 50 ]