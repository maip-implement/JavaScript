//***** 037 What is String in Javascript | Stack Learner *****

//***** 'String'                 //single quote
//***** "AnotherString"           //double quote

//***** 038 String Literal vs Constructor in Javascript | Stack Learner *****

// var str = 'Something'
// var str2 = String('Something')      //String 
// console.log(str2)

//Something

// var n = 10
// var str1 = n.toString()
// var str2 = n + ''
// var str3 = String(n)
// console.log(str1)
// console.log(str2)
// console.log(str3)

// 10
// 10
// 10


//***** 039 Escape Notation in Javascript | Stack Learner *****

//***** Escape Notation *****

// var str1 = 'This is a \'String\''
// var str2 = 'This is a \nString'         //Create a new line
// var str3 = 'This is a \tString'         //Showing a new tab
// var str4 = 'This is a \\String'         //Showing a back Slash
// console.log(str1)
// console.log(str2)
// console.log(str3)
// console.log(str4)

// This is a 'String'
// This is a 
// String
// This is a       String
// This is a \String

//Carriage Reture       \r
// Vartical Tab         \v
// BackSpace            \b
//Form Feed             \f

//*****040 String Comparison in Javascript | Stack Learner*****

//*****String comparison*****           //Using Lexicographic System

var a = 'a'
var b = 'b'
var c = 'aaaam'
var d = 'aaaM'
console.log(a == b)
console.log(a > b)
console.log(a < b)
console.log(c == d)
console.log(c > d)
console.log(c < d)
console.log('001' == 1)     //type convertion

// false
// false
// true
// false
// true
// false
// true