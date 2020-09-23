// String literal
const str1 = 'This is a string'

// String Constructor
const str2 = String('This is a string')



// Number to string conversion
const n = 5
console.log(n + '')  // 5
console.log(n.toString())  // 5
console.log(String(n))  // 5



// Escape Notation
console.log('This is a \'string\'')  // This is a 'string'
console.log('This is a \\string')  // This is a \string



// String Comparison
const name1 = 'Arif'
const name2 = 'arif'

console.log(name1 >= name2)  // false
console.log('a' > 'A')  // true
console.log('aabbccz' > 'aabbccZ')  // true

console.log('05' == 5)  // true
