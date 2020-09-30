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

// function test(){
//     var msg = 'I am Lerning Lexical Scope  and Closure'

//    return function(){
//         console.log(msg)
//     }
// }

// var sayMsg = test()
// sayMsg()

//I am Lerning Lexical Scope  and Closure

// ***** 097 Closure and Loops in Javascript | Stack Learner

// for(var i = 1; i <= 5; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, 1000*i)
// }

// 6
// 6
// 6
// 6
// 6

for(var i = 1; i <= 5; i++){
  (function(n){
      setTimeout(function(){
          console.log(n)
      }, 1000 * n) 
    })(i)    
}

// 1
// 2
// 3
// 4
// 5