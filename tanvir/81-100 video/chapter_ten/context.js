// ***** 086 Execution Context in Javascript | Stack Learner

function a(){
    b()
    console.log('I am Function A')
}
function b(){
    d()
    console.log('I am Function B')
}
function c(){
    console.log('I am Function C')
}
function d(){
    console.log('I am Function D')
}

var x = 100
a()
console.log('I am Global')


//Execution of C function context
//Execution of D function context
//Execution of B function context
//Execution of A function Context
//Execution of global context


// 087 Creation and Execution of Context in Javascript | Stack Learner