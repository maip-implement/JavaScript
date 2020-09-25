// Search Data
const arr = [3, 6, 2, 7, 4]

const find = 8
let isFound = false

for (let i=0; i<arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data Found at Index', i)
        isFound = true
        break
    }
}

!isFound && console.log('Data Not Found')







// Custom search method for array
const isFind = (arr, value) => {
    let isAvailable = false

    for (let i=0; i<arr.length; i++) {
        if (arr[i] === value) {
            isAvailable = true
            break
        }
    }

    return isAvailable
}

const arr1 = [3, 6, 2, 7, 4]
console.log( isFind(arr1, 7) )  // true
console.log( isFind(arr1, 50) )  // false
