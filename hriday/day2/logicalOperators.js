// Logical Operators 
/*
    Logical Operators - && , ||

    a && b
    true && true = true
    true && false  = false
    false && true = false
    false && false = false

    a || b
    true || true = true 
    true || false = true 
    false || true = true 
    false || false = false 
*/

var a = 20
var b = 10
var c = 30
var d = 40
// if(a<b && c>d ){
//     console.log('Hey buddy')
// }else{
//     console.log('Nothing Happened')
// }
if(a<b || c>d ){
    console.log('Hey buddy')
}else{
    console.log('Nothing Happened')
}