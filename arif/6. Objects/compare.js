// Compare of two objects

const obj1 = {
    a: 10,
    b: 20
}

const obj2 = {
    a: 10,
    b: 20
}

console.log(obj1 === obj2)  // false
console.log(obj1 == obj2)  // false

// Memory location of the objects is not same that's why it's happening




// comparing the values
if ( obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true)  // true
} else {
    console.log(false)
}



console.log(String(obj1))  // [object Object]
console.log(JSON.stringify(obj1))  // {"a":10,"b":20}


// converting into string and then compare
console.log(String(obj1) === String(obj2))  // true
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))  // true

