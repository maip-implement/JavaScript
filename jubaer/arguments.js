function add(){
    var sum = 0;
    for(let i = 0; i<arguments.length; i++){
        var result = (arguments[0] + arguments[1])
    } 
    console.log(result)
}
add(10,20,30)

function add2(){
    var sum = 0;
    for(let i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
add2(1,2,4,56,78)