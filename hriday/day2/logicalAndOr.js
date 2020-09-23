var name = ''
// var fullname = ''
// if(name.length === 0){
//     fullname = 'Hriday Shaha'
// }else{
//     fullname = name
// }
// console.log(fullname)

var fullname = name || 'Hriday Shaha'
console.log(fullname)

var itsOk = false 
itsOk && console.log('You will be done it ')