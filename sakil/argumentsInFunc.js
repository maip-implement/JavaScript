//Arguments in function returns an object but if you want to assign value in variable then you must take parameters


function addAll (){
    var sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(4, 5, 4, 4, 4)


