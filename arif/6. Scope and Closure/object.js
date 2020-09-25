// Object litaral
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
