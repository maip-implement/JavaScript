//009. What is Data Types in Javascript

//Primitive Data type

// Number                                       //12 34.43 56.32345
// String                                       //'Text under single quotation' + "Text under double quotation"
// Boolean                                      //true false
// undefined                                    //null

// Object type

// Object
// Array
// Function

//010. Basic Numbers in Javascript

// var integer = 324
// var float = 36.23
// var number1 = Number('34')
// var number2 = Number('34.53')

// console.log(number1)
// console.log(number2)
// console.log(Number.parseFloat(number1))     //convert into float
// console.log(Number.parseInt(number2))       //convert into Integer
// console.log(Number.MAX_VALUE)               //Maximum value
// console.log(Number.MIN_VALUE)               //Minimum value
// console.log(1/0)                            //number/0 = Infinity
// console.log('abc'*10)                       //string * number = NaN


//011. Basic Strings in Javascript


// var str1 = 'String'  
// var str2 = "String"  
// var str3 = `String`                             //string in backtick(es6 feature) 

// var str4 = String('This is a String')           //Convert String in String
// var str5 = String(54)                           //Convert Integer in String
// var str6 = String(32.343532)                    //Convert Float in String

// console.log(str1)
// console.log(str2)
// console.log(str3)
// console.log(str4)
// console.log(str5)
// console.log(str6)
// console.log(str1, str2, str3, str4, str5, str6) //print multiple variable using comma


//012. Basic Booleans in Javascript


// var v1 = true
// var v2 = false

// var v3 = Boolean(true)
// var v4 = Boolean(false)

// console.log(v1)
// console.log(v2)
// console.log(v3)
// console.log(v4)


//013. What is Null & Undefined in Javascript


// var abc                                      //no variable value = undefined
// var xyz = null                               //null value given

// console.log(abc)
// console.log(xyz)


//014. Type Conversion with Truthy Falsy Value


// var str = '1000'
// var n = 10

// console.log(str*n)                               //string * number = number
// console.log(str+n)                               //string + number = String
// console.log(Number.parseInt(str))                //convert string in number
// console.log(n.toString())                        //convert Number in String
// console.log(Number(Infinity))                    //convert Infinity in number  
// console.log(String(Infinity))                    //convert Infinity in String
// console.log(Boolean(Infinity))                   //convert Infinity in Boolean 
// console.log(Boolean(-Infinity))                   //convert Infinity in Boolean 

//Falsy Values
// 0 
// null
// undefined
// NaN

// console.log(Boolean(''))
// console.log(Boolean('Not Empty'))

// console.log(Boolean(null))
// console.log(Boolean(undefined))

// console.log(Boolean(0))
// console.log(Boolean(334))

// console.log(true)
// var x = true
// console.log(x.toString())


//015. Octal and Hexadecimal Number in Javascript


var hex = 0xff
console.log(hex)

var oct = 0756
console.log(oct)




