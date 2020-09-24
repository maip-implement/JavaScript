//there have two type of object..
//1.object literal 2. object constructor
//object should have properties/key
var obj = {} //this is structure of object
obj.x = 10;
console.log(obj)

var myObj = {       //this is object literal
    name:'abu zubaer',
    age:28,
    address:'Meherpur'
}
console.log(myObj)

var obj = Object() //this is object constructor
obj.a = 10;
obj.b = 20;
console.log(obj)

console.log(myObj['age']) //we can also use array notation