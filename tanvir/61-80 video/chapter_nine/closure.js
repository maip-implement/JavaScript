//***** 072 Closure First Look in Javascript | Stack Learner

var b = 10

function a(){
    var x = 5
    return function(){
        console.log(x)
    }
}
    
var abc = a()
console.dir(abc)

// [Function]