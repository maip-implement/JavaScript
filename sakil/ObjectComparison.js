// Compared objects in JS also compare their memory location so they always returns false even when the key and values remain exactly the same.
// In order to perform comparison in objects, compare their key and values separately individually.


var obj1 = {
    a: 5,
    b: 7
}

var obj2 = {
    a: 5,
    b: 7
}

console.log(obj1 === obj2) //return false



// correct ways

if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true)
} else {
    console.log(false)
}

// or

//convert into string and compare (Preferable)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) //returns true