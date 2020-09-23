// for loop
// for (initializer, condition, increment) {}
for (let i=0; i<5; i+=2) {
    console.log(i)  // 0, 2, 4
}



// while loop
let isRunning = true

while (isRunning) {
    const rand = Math.floor(Math.random() * 10 + 1)

    if (rand === 9) {
        console.log('Done')
        isRunning = false
    } else {
        console.log('You got', rand)
    }
}



// do while loop
let isOn = false
do {
    console.log('Running ') // Running (1 time)
} while (isOn)
