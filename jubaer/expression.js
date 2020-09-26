//we can assign a function in  variable

var add = function(a,b){
    return a + b;
}

add(10,20)


setTimeout(function(){
    
    for(let i = 0; i<=60; i++){
       console.log(i)
    }
    
}, 1000)

var another = add;
console.log(another(50,50))