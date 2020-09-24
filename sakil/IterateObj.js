





var obj = {
    x: 40,
    y: 50,
    z: 70
}

// console.log('x' in obj) //returns true
// console.log('m' in obj) //returns false


for (i in obj){
    console.log(i)
    console.log(i + ' : ' + obj[i])
}