// break
while (true) {
    const rand = Math.floor(Math.random() * 10 +1)

    console.log('Hi', rand)

    if ( rand === 5 ) {
        console.log('\nFinally loop break is done!')
        break
    }
}




// continue (skip one time)
for (let i=0; i<=5; i++) {
    if (i === 3 || i>=5) continue

    console.log(i)  // 0, 1, 2, 4
}




// infinity loop
for (; ;) {
    const rand = Math.floor(Math.random() * 10 +1)

    console.log('Hi', rand)

    if ( rand === 5 ) {
        console.log('\nFinally loop break is done!')
        break
    }
}