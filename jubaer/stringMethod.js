//concat method

var a = 'abu'; //there have two different variable
var b = 'zubaer';

var c = a.concat(' ', b) //here i contcat by javascript concat method 
console.log(c) //result is abu zubaer

// substring method

var d = c.substr(4) //we want string which is start index number of 4;
console.log(d) //result is jubaer

//startWith method
console.log(c.startsWith('abu')) //we can check is string start with what!
                                    //result is true
 //charAt method
 
 console.log(c.charAt(0)) //charAt check the index, which index have which string
                            //result is "a"
//endWith method

console.log(c.endsWith("zubaer")) //this method has check is it end with this string or not. result is true


//toUpperCase Method
 console.log(c.toUpperCase()) //this method convert the string to uppercase//result is ABU ZUBAER

//toLowerCase Method

console.log(c.toLowerCase()) //this method conver the string to lowercase

//trim method
//this method remove the unwanted space

console.log("       abu zubaer      ".trim()) //this will remove all spaces

//split method
//this method convert an string as a array

console.log(c.split(" ")) //here i separate it by space (" ")


//Strign Length In JavaScript

var str = 'abu zuaber'
var length = 0;
while(true){
    if(str.charAt(length) == ""){
        break
    }else{
        length++
    }
}
console.log(length)

var str2 = "Meherpur"
var length2 = 0;
while(true){
    if(str2.charAt(length2) == ""){
        break
    }else{
        length++
    }
}
console.log(length2)

var str3 = "JavaScript Programmer"
var length3 = 0;
while(true){
    if(str3.charAt(length3) == ""){
        break
    }else{
        length3++
    }
}
console.log(length3)

//we can easily find the length by javaScript built in method

console.log('abu zubaer'.length)
