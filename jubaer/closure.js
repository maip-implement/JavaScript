function add(a, b){
    var x = 10;
    function sum(){
        return a + b + x  //here x is closure , because it's from another block or not passing as a arguments
    }
    console.log(sum())
}
add(10,20)

var z = 10;
function sub(a, b){
    return a + b - z
}
console.log(sub(10,20))