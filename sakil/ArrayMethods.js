// Array has some cool methods like

var arr = [1, 3, 5, 6, 766, 34, 6, 67, 567, 4];
var arr2 = [1, 3, 5, 6, 766, 34, 6, 67, 567, 4];

console.log(arr.join('/')) // separate with the separator and returns string

arr.fill(anything) //fill whole array with it

var arr3 = arr.concat(arr2) // concat arrays and return a new array.



// As because array is reference type data, we cannot clone an array to another array but there's a method for that.
var a = [1, 2, 3];
var b = Array.from(a);

console.log(b);
