function recursive(n){
    if(n === 0){
        return 
    }

        console.log("hello world")
        recursive(n - 1)
}
recursive(5)

function add(n){
    if(n === 0){
        return 1
    }

    return n + add(n - 1)
}
console.log(add(10))

function multi(n){
    if(n === 0){
        return 1
    }

    return n * multi(n - 1)
}
console.log(multi(10))

function div(n){
    if(n === 0){
        return 1
    }
    return n / div(n - 1)
}
console.log(Math.floor(div(10)))


function sub(n){
    if(n === 0){
        return 1
    }

    return n - sub(n - 1)
}
console.log(sub(10))

var arr = [1,2,3,4,5,6]
function sumOfArr(arr, lastIndex){
    if(lastIndex === 0 ){
        return 0
    }

    return arr[lastIndex] + sumOfArr(arr, lastIndex - 1)
}
console.log(sumOfArr(arr, (arr.length - 1)))