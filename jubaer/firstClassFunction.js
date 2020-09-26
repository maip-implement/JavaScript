//first class function can be store in a variable

function add(a,b){
    return a + b
}
var result = add(10,50);
console.log(result)

//first class function can store in an Array

var arr = []
arr.push(add)
console.log(arr[0](10,20))

//first class function can store in a Object
var obj = {
    sum : add
}
console.log(obj.sum(50, 40))
