//when we going to do something our logic decide which should do or which should not.
//this is logic --> when we trying to do something our logic work these time

//example -- if it's raniy i'm not going to outside --this is the example of simple logic.

//in logical action always have condition --
//---------------------------------------------------------------------------

//in javascript have some type of condition
 var a = 10;
 var b = 20;

 if(a > b){                                         //here i set condition if a is greater than b
                                                    //then return a is greater than b if not                                     //return b is greater than a--
     console.log('a is greater then b')
 }else{
     console.log('b is greater than a')             //result b is greate than a
 }

 var n = 5;
 if(n%2 === 0){                             //here i check even or odd number
                                            
     console.log('this is even number ')    //result this is even number
 }else{
     console.log('this is odd number')
 }

 if(a > b){
     console.log("a is greater than b")
 }else if(a === b){
     console.log("a is equal to b")   // if i have more than 1 condition we have to use else if.
 }else{
     console.log("b is greater than a") //result b is greater than a
 }

 var date = new Date();
 console.log(date.getDay())

    if(date.getDay() === 0){
        console.log('today is saturday')
    }else if(date.getDay() === 1){
        console.log('today is sunday')
    }else if(date.getDay() === 2){
        console.log('today is monday')
    }else if(date.getDay() === 3){
        console.log('today is tuesday')
    }else if(date.getDay() === 4){
        console.log('today is wednesday')
    }else if(date.getDay()===5){
        console.log('today is thirsday')
    }else if(date.getDay() === 6){
        console.log('today is friday')
    }

    //switch statement --

    var today = date.getDay(); //here i assing today's value to today

    switch(today){ //in switch statement we have to directly use our value
        case 0: console.log('today is saturday');
        break;
        case 1: console.log('today is sunday');
        break;
        case 2: console.log('today is monday');
        break;
        case 3: console.log('today is tuesday');
        break;
        case 4: console.log('today is wednesday');
        break;
        case 5: console.log('today is thirsday');
        break;
        case 6: console.log('today is friday');
        break;
        default: console.log('out of day') 
    }

    //logical operator

    var x  = 10;
    var y = 20;
    var z  = 5;

    if(x < y && y>z){  //&& meanse -- if both condition is true only then return true
        console.log('both condition are true') //result is --><----this// && this is call emperson operator
    }

    if(x>y || y>z){
        console.log("one condition is true") //|| this is call or operator ..if one condition is true its return true
                                            
    }

    if(x != y){ //! this is not operator . if x is not equal to y then this condition is true
        console.log("x is not equal to y")
    }