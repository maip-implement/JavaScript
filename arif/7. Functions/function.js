function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}

console.log(fullName('Md Arif', 'Hossain'))  // Md Arif Hossain





// sum of array
const sumOfArray = arr => {
    let total = 0

    for (let i=0; i<arr.length; i++) {
        total += arr[i]
    }

    arr

    return total
}


console.log( sumOfArray([1, 2, 3]) )  // 6
console.log( sumOfArray([4, 5, 6]) )  // 15





// ******* arguments keyword ********

// with perameters
function test(a, b, c) {
    console.log(arguments)  // [Arguments] { '0': 10, '1': 20, '2': 30 }
    console.log( JSON.stringify(arguments) )  // {"0":10,"1":20,"2":30}
}

test(10, 20, 30)


// without perameters
function test1() {
    let total = 0

    for (let i=0; i<arguments.length; i++) {
        total += arguments[i]
    }

    return total
}

console.log(test1(10, 20, 30))  // 60




// return multiple value
const person = (name, email) => {
    return {
        name: name,
        email: email
    }
    console.log('I will never be shown')
}

const p1 = person('Arif', 'arif@swfu.edu.cn')

console.log(p1)  // { name: 'Arif', email: 'arif.swfu@outlook.com' }
console.log(p1.name)  // Arif
