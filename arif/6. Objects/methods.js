const obj = {
    a: 10,
    b: 20,
    c: 30
}

console.log(Object.keys(obj))  // [ 'a', 'b', 'c' ]
console.log(Object.values(obj))  // [ 10, 20, 30 ]
console.log(Object.entries(obj))  // [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]



// copy an object
const obj2 = Object.assign({}, obj)
console.log(obj2) 