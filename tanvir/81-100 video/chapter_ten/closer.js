// ***** 096 Closure in Javascript | Stack Learner

// function test(){
//     var msg = 'I am Lerning Lexical Scope  and Closure'

//     function sayMsg(){
//         console.log(msg)
//     }
//     sayMsg()

// }

// test()

// I am Lerning Lexical Scope  and Closure

function test(){
    var msg = 'I am Lerning Lexical Scope  and Closure'

   return function(){
        console.log(msg)
    }
}

var sayMsg = test()
sayMsg()

//I am Lerning Lexical Scope  and Closure