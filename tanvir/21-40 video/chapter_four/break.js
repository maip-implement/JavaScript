//034. What is Break Statement in Javascript

// Break Statement

// while(true){
//     var rand = Math.floor(Math.random()*10+1)
//     if(rand == 7){
//         console.log('Welcome to JS course')
//         break
//     }else{
//     console.log('You have got ' + rand)
//     }
// }

//get different output as it is random

// You have got 5
// You have got 4
// You have got 10
// Welcome to JS course

for(var i = 1; i<10; i++){          
    if(i%5 == 0){
        break
    }else{
        console.log(i)
    }
}

// 1
// 2
// 3
// 4