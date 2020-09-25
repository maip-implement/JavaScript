// Object literal
const obj = {}
console.log(obj)  // {}
console.log(typeof obj)  // object


// insert property
obj.name = 'Arif'
console.log(obj)  // { name: 'Arif' }


// assign an object with property
const obj1 = {
    name: 'Arif',
    age: 21
}

console.log(obj1)  // { name: 'Arif', age: 21 }

obj1.name = 'Khan'
console.log(obj1)  // { name: 'Khan', age: 21 }



// Object constructor
const obj2 = Object()
obj2.num = 5
console.log(obj2)  // { num: 5 }



const obj3 = new Object()
obj3.num = 5
console.log(obj3)  // { num: 5 }




// get value from object
const point = {
    x: 10,
    y: 20,
    z: 15
}

// dot notation
console.log(point.x)  // 10
console.log(point.x + point.y)  // 30

// array notation
console.log(point['z'])  // 15

const show = 'x'
console.log(point[show])  // 10


// update or create
const point1 = {
    x: 10,
    y: 20,
    z: 15
}

point1.x = 30
console.log(point1)  // { x: 30, y: 20, z: 15 }

point1.a = 50
console.log(point1)  // { x: 30, y: 20, z: 15, a: 50 }

