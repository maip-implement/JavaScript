//***** 065 Function Expression in Javascript | Stack Learner *****

// var addition = function(a, b){
//     return a+b
// }

// addition(10,40)

setTimeout(function(){
    console.log('I will call after 5 seconds')
},5000) 

var another = addition
console.log(another(8,9))

// 17
// I will call after 5 seconds
