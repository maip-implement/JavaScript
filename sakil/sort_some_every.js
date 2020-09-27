var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 34
    },
    {
        name: 'C',
        age: 17
    },
    {
        name: 'D',
        age: 29
    }
]

var arr = [3, 54, -4, -1, 6, 3, 4, 7, 4, 8, 10, 56, 9, 1, 5, 6, 8, 4]
var arr2 = [3, 54, 6, 3, 4, 7, 4, 8, 10, 56, 9, 1, 5, 6, 8, 4]


// Sort wil change the original array

// arr.sort()
// console.log(arr)

// persons.sort()
// console.log(persons)


//Accending sort
arr.sort(function(a, b){
    if(a > b){
        return 1
    } else if(a < b){
        return -1
    } else{
        return 0
    }
})

console.log(arr)


//Accending sort of age
persons.sort(function(a, b){
    if(a.age > b.age){
        return 1
    } else if(a.age < b.age){
        return -1
    } else{
        return 0
    }
})

console.log(persons)



var res1 = arr2.every(function(value){
    return value % 2 === 0
})
console.log(res1) //Returns false

var res2 = arr2.every(function(value){
    return value >= 0
})
console.log(res2) //Returns true

var res3 = arr.some(function(value){
    return value % 2 === 1
})
console.log(res3) //Returns true with "arr" 