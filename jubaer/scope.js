function test(n){
    function a(){
        return n % 5 === 0;  //function have there won block or scope 
                             //under this function in curly braces -this is block or scope
    }
    function b(){
        return n % 3 === 0; //in function we can't access this scope data from outside  from this scope
    }

    if(a() && b()){
        console.log("both number is available")
    }else{
        console.log('number not found')
    }
}
test(15) 