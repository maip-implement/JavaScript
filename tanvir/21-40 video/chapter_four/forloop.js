//029. Introduction to Loops in Programming

// For loop
// While loop
// Do While loop

//030. What is For Loop in Javascript

//For Loops

// for(var i = 0; i<5; i++ ){        //for(initializer, condition, increament)
//     console.log((i+1) + ' Tanvir')
// }

//1 Tanvir
// 2 Tanvir
// 3 Tanvir
// 4 Tanvir
// 5 Tanvir

// for(i = 1; i<=10; i++){
//     if(i%2 == 1){
//         console.log(i)
//     }
// }

// 1
// 3
// 5
// 7
// 9

// for(i = 1; i<=10; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// 2
// 4
// 6
// 8
// 10

// var sum = 0;
// for( var i = 1; i <= 5; i++){
//     console.log(sum + ' + ' +  i + ' = ' + (sum+i) )
//     sum += i
// }
// console.log('Result = ' + sum)

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// Result = 15

var sum = 0;
for( var i = 1; i <= 10; i++){
    if(i%2 == 0){
        console.log(sum + ' + ' +  i +' = ' +(sum+i) )
        sum += i
    }
}
console.log('Result = '+sum)

// 0 + 2 = 2
// 2 + 4 = 6
// 6 + 6 = 12
// 12 + 8 = 20
// 20 + 10 = 30
// Result = 30