var n = 101
var num = ''

if(n%2 === 0){
    num = 'This is a Even number'
}else{
    num = 'This is an Odd number'
}
console.log(num)

// Ternary Way
// var variableName = condition ? true side result : false side result 
var num1 = n%2 === 0 ? 'This is a Even Number 1 ' : 'This is an Odd number 1 '
console.log(num1)