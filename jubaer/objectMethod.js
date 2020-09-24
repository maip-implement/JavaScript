var obj1= {
    x:1,
    y:7
}

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1)) //its define a multi-dimentional array's

var obj2 = Object.assign(obj1)
obj2.z = 40;
console.log(obj2)

console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))

var obj3 = Object.assign(obj2)
obj3.a = 55;
console.log(obj3)
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))