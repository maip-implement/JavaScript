var arr = [4,5,9,8,11,36,45]
var find = 8;
var isFound = false;
for(let i=0; i<arr.length; i++){
    if(arr[i] === find){
        console.log('data found in index number of' + " " + i)
        isFound = true
        break
    }
}
if(!isFound){
    console.log('data not found')
}