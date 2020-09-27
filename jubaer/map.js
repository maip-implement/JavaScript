var arr = [10,50,4,23,47,9,10]


arr.map((arr, index) =>{  //map have 3 arguments value, index and array
    console.log(index, (arr * arr))
})

function myMap(arr, callback){
    var newArray = []
    for(let i = 0; i<arr.length; i++){
        var temp =  callback(arr[i], i, arr)
        newArray.push(temp)
    }
}
myMap([10,20,40,50], function(value){
    console.log(value)
})