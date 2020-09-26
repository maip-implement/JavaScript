// pure function
    // * It returns the same result if given the same arguments
    // * It does not cause only observable side effects

// example of pure function
function sqr(n) {
    return n*n
}

console.log(sqr(2))  // 4
console.log(sqr(2))  // 4






// not pure function
let n = 10

function change() {
    n = 100
}

console.log(n)  // 10
change()
console.log(n)  // 100






// not pure function
const point = {
    x: 45,
    y: 30
}

function printPoint(point) {
    point.x = 450
    point.y = 300

    console.log(point)  // { x: 450, y: 300}
}

printPoint(point)
console.log(point)  // { x: 450, y: 300}
