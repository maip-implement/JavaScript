



function add(a, b) {
    return a + b
}

function manipulate(a, b, func) {
    const c = a + b
    const d = a - b
    
    // * We can return Functions from Another Function
    return function() {
        const m = func(a, b)
        return c * d * m
    }
}

// * We can Pass Function as an Arguments
const multiply = manipulate(3, 4, add)

console.log(multiply)  // [Function]
console.log(multiply())  // -49


