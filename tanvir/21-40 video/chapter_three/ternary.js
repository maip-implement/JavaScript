//027. Ternary Operator in Javascript

var n = 10
var str = ''

if(n%2 == 0){
    str = 'Even'
}else{
    str = 'Odd'
}
console.log(str)        //Even

var result = n%2 == 0 ? 'Even' : 'Odd'      //Even(condition?if:else)
console.log(result)