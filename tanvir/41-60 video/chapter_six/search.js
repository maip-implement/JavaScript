// ***** 047 Search from Array in Javascript | Stack Learner *****

var arr = [ 23, 3, 5, 6, 7, 1, 3, 32, 56]

var find = 56
var isFound = false

for ( var i = 0; i< arr.length; i++){
    if(arr[i] == find ){
    console.log('Data from index ' + i)
    isFound = true
    break
    }
}
if(!isFound){
    console.log('Data Not found')
}

//Data from index 8