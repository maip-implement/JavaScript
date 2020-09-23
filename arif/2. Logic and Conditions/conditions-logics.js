const a = 5
const b = 10
const c = 20

// check which one is small between a, b and c
if (a<b && a<c) {
    console.log('A is small')  // A is small
} else if (b<a && b<c) {
    console.log('B is small')
} else {
    console.log('C is small')
}

if (c % 2 === 0) console.log(c, 'is even')  // 20 is even

// condition ? true side : false side
console.log(a, 'is', a%2 === 0 ? 'even' : 'odd')  // 5 is odd



// switch
const date = new Date()
const today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    default:
        console.log('Not a valid number')
}


// logical and or
const name = 'Arif'
const name2 = ''

console.log( name || 'Md Arif Hossain')  // Arif
console.log( name2 || 'Md Arif Hossain')  // Md Arif Hossain

const isOk = false
const isOk2 = true
isOk && console.log('Everything is ok')  // 
console.log(isOk && 'Everything is ok')  // false
isOk2 && console.log( 'Everything is ok')  // Everything is ok
