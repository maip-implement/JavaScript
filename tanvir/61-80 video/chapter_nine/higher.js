// 071 Higher Order Function in Javascript | Stack Learner

// function add(a, b){
//     return a+b
// }

// function manipulate(a, b, func){
//     var c = a + b
//     var d = a - b

//     function multiply(){
//         var m = func(a, b)
//         return c*d*m
//     }
//     return multiply
// }

// var multiply = manipulate(3, 4, add)
// console.log(multiply())

// -49

function add(a, b){
    return a+b
}

function manipulate(a, b, func){
    var c = a + b
    var d = a - b

    
    return function multiply(){
        var m = func(a, b)
        return c*d*m
    }
}

var multiply = manipulate(3, 4, add)
console.log(multiply())

// -49