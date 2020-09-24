var arr = [  //two dimentional array
    [90,80,70,60,50],
    [80,85,65,75,45],
    [87,54,56,44,80]
]

for(let i = 0; i<arr.length; i++){ 
    for(let j=0; j<arr[i].length; j++){
        console.log(arr[i][j])
    }
}

var arr2 =[ //tri-dimentional array
    [
        [2,5,6,7,9],
        [3,5,6,8,10]
    ],
    [
        [7,8,9,5],
        [4,5,6,9]
    ]
]

for(let i=0; i<arr2.length; i++){
    for(let j=0; j<arr2[i].length; j++){
        for(let k = 0; k<arr2[i][j].length; k++){
            console.log("multi" + " " + arr2[i][j][k])
        }
    }
}