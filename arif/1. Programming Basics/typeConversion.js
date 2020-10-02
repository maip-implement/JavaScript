const str = '5'
const num = 5

// auto conversion
console.log(str + num) // 55
console.log(str * num) // 25

console.log(typeof Number(str)) // number
console.log(typeof Number.parseFloat(str)) // number

console.log(typeof String(num)) // string
console.log(typeof num.toString()) // string

console.log(Infinity) // Infinity
console.log(Boolean(Infinity)) // true
console.log(typeof Number(Infinity)) // number
console.log(typeof String(Infinity)) // string

console.log(typeof (true).toString()) // string

// ******* Falsy Values *******
console.log(Boolean('')) // false
console.log(Boolean(0)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(false)) // false

// ******* Truthy Values *******
console.log(Boolean('abc')) // true
console.log(Boolean(123)) // true
console.log(Boolean(Infinity)) // true
console.log(Boolean(true)) // true
// and so on...