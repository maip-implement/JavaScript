var obj = {
    x: 40,
    y: 50,
    z: 70
}


console.log(obj)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj)) //Returns two dimensional array of element



//Just like Array (Array is also obj) a new object can be created from previous object.
var obj2 = Object.assign({}, obj) //assign method will assign obj into {} and create a new object named obj2

// Obj2 is now a complete different object and we can change value of any key here and it won't affect the previous obj
obj.x = 100;
console.log(obj)
