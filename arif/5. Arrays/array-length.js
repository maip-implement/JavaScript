// custom array length function
const len = arr => {
    let count = 0

    while (true) {
        if (arr[count] === undefined) break
        count++
    }

    return count
}


console.log([1, 2, 3, 'a', 1.45, 'B'].length)  // 6
console.log(len([1, 2, 3, 'a', 1.45, 'B']))  // 6
