// ******* Arithmetic Operator (+, -, *, / %, ++, --) *******
console.log(11 % 2) // 1

// Pre Incremental and Pre Decremental
let numPre = 10
console.log(++numPre) //11
console.log(numPre) //11
console.log(--numPre) //10
console.log(numPre) //10

// Post Incremental and Pre Decremental
let numPost = 10
console.log(numPost++) //10
console.log(numPost) //11
console.log(numPost--) //11
console.log(numPost) //10




// ******* Assignment Operator (+=, -=, *=, /=, %=) *******
let a = 5
a += 2
console.log(a)  //7




// ******* Comparison Operator (==, ===, !=, !==, >, >=, <, <=) *******
console.log(5 == '5') // true
console.log(5 === '5') // false

console.log(5 >= 5) // true
console.log(5 >= '5') // true




// ******* Logical Operator (&&, ||, !) *******
const x = 1
const y = 2
const z = 3
console.log(x<y && x<z) // true
console.log(x<y || z<x) // true




// ******* Bitwise Operator (&, |, ~, ^, <<, >>) *******
console.log(x<y & x<z) // 1
console.log(x<y & z<x) // 0
console.log(x<y | z<x) // 1
console.log(y<x | y>z) // 0




// ******* Typeof Operator () *******
console.log(typeof 'abc') // string

