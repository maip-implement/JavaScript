//in javascript have two type of javascript. 1. primitive data type, 2. object data type

//primitive data type---->

//NUmber is primitive data type 
//0 to 9 is number data type
//strig is a primitive data type
// "abu zubaer " this is primitive data type(string)
//boolean data type-- true or false is primitive data type
//undefined and null also is primitive data type

//Object data type -- in javascript have three type of object data type-->
//1.function 2.Array. 3.Object


var n = 1234;
var fn = 123.54;
var sn = '123'; //this is a string but we can convert string as a number
var convertStrFromNumber = Number(sn); //here i do convert string to number
//this is number data type;

//we can convert floating number to intiger, and integer to floating

//example
var convertInteger = parseInt(fn);
console.log(convertInteger); //actual number is 123.54 after convert in integer the result is 123


//string data type example

var name = 'abu zubaer' //string should wrap in quotation or backtique

var name = `name` //this is wrap in backtique //es6 version

//boolean data type-->> where just describe two things , true or false

//examle
var isAvailable = true; 
var jsIsDumb = false;
//these are boolean datatype

//hexa decimal and octal nmumber 

var hex = 0xff; 
console.log(hex)
var octal = 045;
console.log(octal)



