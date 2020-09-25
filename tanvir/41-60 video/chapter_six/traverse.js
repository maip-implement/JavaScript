// ***** 045 Array Traversing in Javascript | Stack Learner  *****

// var arr = [3, 4 , 4, 2, 6]

// for(var i = 0; i <arr.length; i++){
//     console.log(arr[i])
// }

// for(var i = 0; i <arr.length; i++){
//     arr[i] = arr[i] + 2
// }
// console.log(arr)

//3
// 4
// 4
// 2
// 6

//[ 5, 6, 6, 4, 8 ]

// var sum = 0
// for(var i = 0; i <arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)

//29

// var arr = [3, 4 , 5, 2, 6]

// for(var i = 0; i <arr.length; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i])
    
//     }
// }

// 4
// 2
// 6

// for(var i = 0; i <arr.length; i++){
//     if(arr[i] % 2 == 1){
//         console.log(arr[i])
//     }
// }

//3
// 5


// var arr = [3, 4 , 5, 2, 6]

// var sum = 0
// for(var i = 0; i <arr.length; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i])
//         sum += arr[i]
//     }
// }
// console.log(sum)

//4
// 2
// 6
// 12


var arr = [3, 4 , 5, 2, 7, 13]

var sum = 0
for(var i = 0; i <arr.length; i++){
    if(arr[i] % 2 == 1){
        console.log(arr[i])
        sum += arr[i]
    }
}
console.log(sum)

//3
// 5
// 7
// 13
// 28