// anonymous function
const addition = function(a, b) {
    return a+b;
}

console.log(addition(10, 40))  // 50



setTimeout(() => {
    console.log('I will call after five seconds')
}, 5000)

const another = addition

console.log(another(2, 3))


/**
 * first we will get 50 then 5
 * after 5 seconds we will get "I will call after five seconds"
 */