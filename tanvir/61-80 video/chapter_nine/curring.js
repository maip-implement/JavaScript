// ***** 082 Currying in Javascript | Stack Learner

function add(a, b, c){
    return a + b + c
}

// add(32,14,4)

function currying(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

var result = currying(5)(10)(15)
console.log(result)

// 30