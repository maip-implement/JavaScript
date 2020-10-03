function somthing(greet, name){
    function getFirstName(){
        return name.split(" ")[0]
    }
    var message =greet + " " + getFirstName()
    console.log(message)
}
somthing('hello', "abu zubaer")