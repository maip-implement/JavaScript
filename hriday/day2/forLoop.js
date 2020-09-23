// For Loops

/*
for ( var i = 1; i <=10; i++){
    console.log(i + ' hriday')
}

var sum = 0
for(var i = 0; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
    sum += i
}
console.log('Result ' + sum)

*/
var sum = 0
for(var i = 1; i <= 100; i++){
    if(i%2===0){
        console.log(sum + ' + ' + i + ' = ' + (sum+i))
        sum += i
    }
}
