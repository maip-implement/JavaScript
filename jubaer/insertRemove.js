//array built in method

var arr4 = [1,2,3,4,5,6,7]
arr4.push(10)
console.log(arr4) //adding this number in array's last index 

arr4.pop() //this method remove the last index 
console.log(arr4) //result 10 has remove
arr4.shift() //this method removing data form first index
console.log(arr4)
arr4.unshift(10) //this method adding data in frist index
console.log(arr4)


//splice method
//we can remove, insert data in any index using this method
var arr5 = [1,2,3,4,5,6]
arr5.splice(3,0,10) //(index, remove, adding)
console.log(arr5)
arr5.splice(3,1,0) //has remove 3 number of index then adding nothing
console.log(arr5)

arr5.splice(2,1,5)
console.log(arr5) //removing 2 number index and adding 5;

