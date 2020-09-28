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

// var arr1 = [1, 2, 3]
// var arr2 = [5, 7, 9]
// var arr3 = [9, 7, 1]

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

// function sumOfArray(arr) {
//     var sum = 0
//     for(var i = 0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }

// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

// 6
// 21
// 1

// ***** 063 Argument Object in Javascript | Stack Learner *****

// function test(a, b, c){
//     console.log(arguments)
// }

// test(10,20,30)

// [Arguments] { '0': 10, '1': 20, '2': 30 }

// function test(a, b, c){
//     for(var i = 0; i<arguments.length; i++){
//         console.log(arguments[i])
//     }
  
// }

// test(10,20,30)

// 10
// 20
// 30

// function test(){
//     for(var i = 0; i<arguments.length; i++){
//         console.log(arguments[i])
//     }
  
// }

// test(60,80,390)

// 60
// 80 
// 390


function addAll(){
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(3, 7, 7)
addAll(2, 7, 8, 2, 4, 7)

// 17
// 30
