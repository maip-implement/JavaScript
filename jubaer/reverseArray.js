var arr = [1,2,3,4,5,6,7]
for(let i=0; i<(arr.length/2); i++){
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}
console.log(arr)


var arr2 = [1,2,3,4,5,6,7]
console.log(arr2.reverse())
