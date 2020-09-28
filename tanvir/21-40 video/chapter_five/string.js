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

// var a = 'a'
// var b = 'b'
// var c = 'aaaam'
// var d = 'aaaM'
// console.log(a == b)
// console.log(a > b)
// console.log(a < b)
// console.log(c == d)
// console.log(c > d)
// console.log(c < d)
// console.log('001' == 1)     //type convertion

// false
// false
// true
// false
// true
// false
// true

//***** 041 String Methods in Javascript | Stack Learner *****

// var a = 'I am'
// var b = 'Tanvir Hossain'

// var c = a.concat(' ',b)
// var d = c.substr(5)
// console.log(c)
// console.log(d)

// I am Tanvir Hossain
// Tanvir Hossain

// console.log(c.charAt(0))
// console.log(c.startsWith('I am'))
// console.log(c.endsWith('Fahim'))

// I
// true
// false

// console.log(a.toUpperCase())
// console.log(b.toLowerCase())

// I AM
// tanvir hossain

// console.log('           Hi brothers      ')
// console.log('Hi brothers'.trim())

//        Hi brothers      
// Hi brothers

// console.log(c.split(' '))

//[ 'I', 'am', 'Tanvir', 'Hossain' ]

//***** 042 String Length in Javascript | Stack Learner *****

// var str = 'Some thing'
// console.log(str.charAt(6))
// console.log(str.charAt(60))
// var str2 = str.charAt(29)
// console.log(str2)
// console.log(typeof str2)


//h
//

//string

var str = 'Hi'

var length = 0

while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}

console.log(length)

//2

console.log('running brothers'.length)
