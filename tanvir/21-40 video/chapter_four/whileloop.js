//031. What is While Loop in Javascript

// var i = 0
// while(i<5){
//     console.log('Tanvir')
//     i++
// }

// Tanvir
// Tanvir
// Tanvir
// Tanvir
// Tanvir

var isRunning = true

while(isRunning){
    var rand = Math.floor(Math.random()*10+1)
    if(rand == 7){
        console.log('Welcome to the coding world')
        isRunning = false
    }else{
        console.log('You have got ' + rand)
    }
}

// Different Output as give random value

// You have got 5
// You have got 5
// You have got 1
// Welcome to the coding world