function greet(msg){
    return function(name){
        return msg + name
    }
}
 
var greetings = greet("Hello")
console.log(greetings('Shajib'))

function base(b){
    var result = 1;
    return function(n){
        for(let i = 1; i<b; i++){
            result *= n
        }
        return result
    }
}
var power = base(10)
console.log(power(5))