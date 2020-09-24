// sting length by custom function
const len = str => {
    let count = 0

    while (true) {
        if (str.charAt(count) === '') break
        count++
    }

    return count
}

console.log(len('abcde'))  // 5
console.log(len('Md Arif Hossain'))  // 15


// default method to get length of a string
console.log('abcde'.length)  // 5
console.log(len('Md Arif Hossain'))  // 15
