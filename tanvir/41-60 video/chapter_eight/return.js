
// ***** 064 Return Something from a Function in Javascript | Stack Learner *****


// function addAll(){
//     var sum = 0;
//     for(var i = 0; i<arguments.length; i++){
//         sum += arguments[i]
//     }
//     console.log(sum)
// }

// var a  = addAll(3, 7, 7)
// var b  = addAll(2, 7, 8, 2, 4, 7)
// console.log(a, b)

// 17
// 30s
// undefined undefined
// function addAll(){
//     var sum = 0;
//     for(var i = 0; i<arguments.length; i++){
//         sum += arguments[i]
//     }
//   return sum
// }

// var result = addAll(1,5,6,9)
// console.log(result)

// 21

function person(name, email){
    return{
        name: name,
        email: email
    }
}
var p1 = person('Tanvir Fahim', 'tanvirfahim6939@gmail.com')
console.log(p1)

// { name: 'Tanvir Fahim', email: 'tanvirfahim6939@gmail.com' }