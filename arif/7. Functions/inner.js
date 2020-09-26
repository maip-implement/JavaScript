// example of inner function
function something(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }

    sayHi()
}

something('Hi', 'Arif')




// another example to get fist name
function getName(greet, name) {
    function getFirstName() {
        if (name) {
            const nameArr = name.split(' ')
            
            if (nameArr.length>2) {
                return nameArr[0] + ' ' + nameArr[1]
            } else {
                return nameArr[0]
            }
        } else {
            return ''
        }
    }

    return greet + ' ' + getFirstName()
}
console.log(getName('Good Morning', 'Md Arif Hossain'))  // Good Morning Md Arif
console.log(getName('Good Evening', 'Khan Abir'))  // Good Evening Khan
console.log(getName('Good Night'))  // Good Evening 