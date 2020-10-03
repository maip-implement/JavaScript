function add(){     
    var a = 10;
    var b = 20;
    console.log(a+b)
}
add() //it's work only when call this function
//result is 30

function minus(){
    var a = 10;
    var b = 5;
    console.log(a - b)
}
minus() //result is 5

//we can also get input by parameter

function add1(a, b){
    console.log(a + b)
}
add1(10, 20) //in this function we can pass any two value because we have two parameter

var arr1 = [1,2,3,4]
var arr2 = [4,5,6,7]
var arr3 = [8,9,10,11]

function addArray(arr){
    var sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}
addArray(arr1)
addArray(arr2)
addArray(arr3)