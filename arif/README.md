![JavaSctipt](https://raw.githubusercontent.com/maip-implement/JavaScript/arif/arif/js.png =100x20)
# JavaScript
- Learning Purpose.
- Here I used `Quokka` extension to show the result of console.
- I will not use ~~`var`~~ here.
- JavaScript is Case Sensitive. Meaning, `const` and `CONST` or `Const` is not same.
- [Repository Link](https://github.com/maip-implement/JavaScript) : `https://github.com/maip-implement/JavaScript`
>My github profile: [Md Arif Hossain](https://github.com/arifpro "Md Arif Hossain")

<br /><br /><br />

# Programming Basics

### __What is Programming?__
Programming is a set of instruction which our computer can read, understand and produce and output.

### __Data types__
- ***Primitive:*** `Primitive Types are Defined by JavaScript.` 
  * Number
  * String
  * Boolean
  * undefined
  * null
- __*Object:*__ `Object Types are User Defined Data Type.` 
  * Array
  * Object
  * Function

### __Falsy Values__
  1. ''
  1. 0
  1. null
  1. undefined
  1. NaN

### __Truthy Values__
  1. 'abc'
  2. 123
  3. Infinity
  4. **.....**

### __Comments__
- `// This is a single line comment.`
- `/* This is a multiline comment. */`
> We use comment for note something and so on...

<br /><br />

# Logic and Conditions
- `if`, `else if`, `else`
- `switch`
- `&&`, `||`, `!`

<br /><br />

# Loops and Repetition
There are mainly `three types` of loops.
- `For` Loop
- `While` Loop
- `Do While` Loop
- `break`, `continue`

<br /><br />

# Handling Strings
- String `Literal` vs `Constructor`
- Escape Notation (`\`)
    * New line: `\n`
    * Tab: `\t`
    * Carriage Return: `\r`
    * Vertical Tab: `\v`
    * Backspace: `\b`
    * Form Feed: `\f`
    * etc......
- String `Comparison`: JavaScript uses ***`Lexicographic`*** system to compare two string
- Some default method in JavaSctipt String
- Get string `length` by `custom function`
> __Lexical Order__: `z, y, x, ..., b, a, Z, Y, X, ..., B, A`

<br /><br />

# Arrays
### __What is Array?__
Array is a `Data Structure` where we can `organize multiple data` under `a single variable`.


### __Topics__
- `Traverse` an Array
- `Insert`, `Remove` and `Update`
- We can use `splice()` method to `add`, `delete` and `edit` an array
- Search Data from array
- `Multi Dimensional` Array
- `Reverse` array elements


### __Custom length method__
```javascript
const len = arr => {
    let count = 0

    while (true) {
        if (arr[count] === undefined) break
        count++
    }

    return count
}


console.log(len([1, 2, 3, 'a', 1.45, 'B']))  // 6
console.log(len('Md Arif Hossain')) // 15
```
### __Custom search method for array__
```javascript
const isFind = (arr, value) => {
    let isFound = false

    for (let i=0; i<arr.length; i++) {
        if (arr[i] === value) {
            isFound = true
            break
        }
    }

    return isFound
}

const arr = [3, 6, 2, 7, 4]
console.log( isFind(arr, 7) )  // true
console.log( isFind(arr, 50) )  // false
```
### __Custom reverse method for array__
```javascript
const reverse = array => {
    for (let i=0; i<(array.length / 2); i++) {
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }

    return array
}

console.log(reverse([1, 2, 3, 4, 5, 6]))  // [6, 5, 4, 3, 2, 1]
```


<br /><br />

# Objects
- Object `Literal` and `Constructor`
- `Dot` vs `Array` notation
- `Create` and `Update` object property
- `Compare` of two objects
- `Iterate` an object
- Default `methods` for object


<br /><br />

# Functions
- Reduce repetated code by function
- __Perameter :__ `function test(a, b) {}`. Here a and b is perameter of the function
- __Argument :__ `test(5, 7)`. Here we passing data to the function and this data is called argument
- `arguments` keyword: Works only with `function` keyword, `not work in ES6` version function declaration.
    * __Work :__ `function test() { console.log(arguments.length) }`
    * __Not Work :__ `const test = () => console.log(arguments.length)`
- Function `expression`
- `anonymous` function
- `setTimeout`
- `inner` function
- `scope` in js

<br /><br />

# Functional Programming
### __What is Functional Programming__
Functional programming is a programming paradigm, a style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functioons and avoids changing state and mutable data.

### __Three Main Terms__
1. `Pure Functions`
    * It returns the same result if given the same arguments
    * It does not cause only observable side effects
2. `First Class Functions`
3. `Higher Order Functions`

<br /><br />

# Scope and Closure

<br /><br />

# OOP Intro

<br /><br />

# OOP with JS

<br /><br />

# Prototype

<br /><br />

# Prototypical Inheritance

<br /><br />

# ES6

<br /><br />

# Project

<br /><br />

# Error Handling

<br /><br />

# Asynchronous Programming

<br /><br />

# DOM (Document Object Model)

<br /><br />

# Javascript Libraries

<br /><br />

# Future Road Map

<br /><br />

# Weather App

---
___

<br />

***Git Clone***
```bash
1. git clone https://github.com/maip-implement/JavaScript.git
2. git fetch
3. git checkout arif
```

***ES6 function***
```javascript
const sum = (x, y) => x + y
```

***Bio***
| Title    | Link                                |
| -------- | ----------------------------------- | 
| Website  | https://proarif.com                 |
| Github   | https://github.com/arifpro          |
| Facebook | https://www.facebook.com/proarif0   |
| LinkedIn | https://www.linkedin.com/in/proarif |
| Medium   | https://medium.com/@proarif         |
| Twitter  | https://twitter.com/proarifBD       |
| Email    | arif.swfu@outlook.com               |


