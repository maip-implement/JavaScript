// ***** 048 Multidimensional Array in Javascript | Stack Learner *****

var arr = [
    [12, 34, 353, 12],
    [21, 53, 34, 65],
    [32, 45, 75, 67]
]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[1][1])
// console.log(arr[2][2])

//[ [ 12, 34, 353, 12 ], [ 21, 53, 34, 65 ], [ 32, 45, 75, 67 ] ]
//[ 12, 34, 353, 12 ]
// [ 21, 53, 34, 65 ] 
// [ 32, 45, 75, 67 ] 
// 53
// 75

for(var i = 0; i<arr.length; i++){
    console.log(arr[i])
}

for(var i = 0; i<arr.length; i++){
    for(var j = 0; j< arr[i].length; j++){
    console.log('Element ' + i + ':' + arr[i][j])
    }
}


// [ 12, 34, 353, 12 ]
// [ 21, 53, 34, 65 ]
// [ 32, 45, 75, 67 ]

// Element 0:12
// Element 0:34
// Element 0:353
// Element 0:12
// Element 1:21
// Element 1:53
// Element 1:34
// Element 1:65
// Element 2:32
// Element 2:45
// Element 2:75
// Element 2:67