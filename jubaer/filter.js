var arr = [1,2,3,4,5,6,7,8,9,10]
var result = arr.filter(val =>{
    return val % 2 === 0
})
console.log(result)

function myFilter(arr, callback){
    var myArr = []
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            myArr.push(arr[i])
        }
    }
    return myArr
}

console.log(myFilter([1,2,3,4,5,6,7,8,9,10], function(value){
    return value % 2 === 0
}))

