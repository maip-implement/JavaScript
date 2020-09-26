const obj = {
    a: 10,
    b: 20,
    c: 30
}

console.log('x' in obj)  // false
console.log('a' in obj)  // true



for (let i in obj) {
    console.log(i + ':', obj[i])
}