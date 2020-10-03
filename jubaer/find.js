var arr = [1,2,3,4,5,6,7,8,9]
var result = arr.find((value)=>{
   return value === 3
})

console.log(result)

function myFind(arr, callback){
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            return arr[i]
        }
    }
}

console.log(myFind([1,2,3,4,5,6,7,8,9], function(value){
    return value === 3
}))

function myFindIndex(arr, callback){
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i])){
            return i
        }
    }
}
console.log(myFindIndex([1,2,3,4,5,6,7,8,9], function(value){
    return value === 4
}))