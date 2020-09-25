var arr = [1, 2, 3, 4, 5 ,6 , 7, 8, 8, 09]


// Filter method create a new array filtered with specific condition
var filterArray = arr.filter(function(value){
    return value % 2 === 0
})
console.log(filterArray)



// implementation

function myFilter(arr, cbFunc){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(cbFunc(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(myFilter(arr, function(value){
    return value % 2 === 0
}))

console.log(myFilter(arr, function(value){
    return value % 2 === 1
}))