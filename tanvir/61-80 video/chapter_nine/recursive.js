// ***** 081 Recursive Function in Javascript | Stack Learner

// function sayHi(n){
//     if(n == 0){
//         return
//     }
//     console.log('Hi, I am Calling')
//     sayHi(n - 1)
// }

// sayHi(5)

// Hi, I am Calling
// Hi, I am Calling
// Hi, I am Calling
// Hi, I am Calling
// Hi, I am Calling

// function sum(n){
//     if(n == 1){
//         return 1
//     }
//     return n + sum(n-1)
// }

// console.log(sum(5))

// 15


// function fact(n){
//     if(n == 1){
//         return 1
//     }
//     return n * fact(n-1)
// }

// console.log(fact(5))

// 120

var arr = [1, 2, 3, 4, 5]

function sumOfArray(arr, lastIndex){
    if(lastIndex < 0){
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1))

// 15