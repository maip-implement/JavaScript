var arr = [1,2,3,4,5,6]

arr.forEach((value, index, array) => {
    console.log(value, index)
});



function forEach(arr, callback){
    

    for(let i = 0; i<arr.length; i++){
        callback(arr[i], i, arr)
    }
}

forEach([10,20,30,40], function(value, index, array){
    console.log(value, index)
    console.log(array)
})