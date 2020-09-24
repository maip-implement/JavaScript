//026. Logical Operators in Javascript

//&& || !

//And operator
//A && B
//true && true = true
//true && false = false
//false && true = false
//false && false = false

//OR operator
//A || B
//true || true = true
//true || false = true
//false || true = true
//false || false = false

var a = 440
var b = 20
var c = 320
var d = 40

// if (a>b && c>d){
//     console.log('A is greater than B and C is greater than D')  //A is greater than B and C is greater than D
// }else{
//     console.log('At least one condition is false')
// }

if (a>b || c>d){
    console.log('A is greater than B or C is greater than D')  //A is greater than B or C is greater than D
}else{
    console.log('At least one condition is false')
}

var check = !(a>b)      //false(! makes value opposite)
console.log(check)