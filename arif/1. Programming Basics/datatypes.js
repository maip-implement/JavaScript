// Primitive
// Object

// ******* Numbers *******
const n = 5
const m = Number(5.5)
const x = Number('5.5')
const y = Number.parseInt('5.5')
const z = Number.parseFloat('5.5')

console.log(n) // 5
console.log(m) // 5.5
console.log(x) // 5.5
console.log(y) // 5
console.log(z) // 5.5
console.log(1/0) // Infinity
console.log('abc' * 5) // NaN

// default value
console.log(Number.MAX_VALUE)


// ******* String *******
const str1 = 'ab c'
const str2 = "ab  c"
const str3 = `ab   c`
const str4 = String('xyz')
const str5 = String(12.3)

console.log(str1) // ab c
console.log(str2) // ab  c
console.log(str3) // ab   c
console.log(str4) // xyz
console.log(str5) // 12.3