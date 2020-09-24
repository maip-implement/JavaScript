//036. What is Infinity For Loop in Javascript

//Infinity For loop

for(; ;){
    var rand = Math.floor(Math.random()*10+1)
    if(rand == 7){
        console.log('Welcome to the coding world')
        break
    }else{
        console.log('You have got ' + rand)
    }
}

//Differnt output & its can be infinity

//You have got 8
// You have got 6
// You have got 4
// You have got 2
// You have got 4
// You have got 3
// You have got 4
// You have got 8
// Welcome to the coding world