// ***** 066 Inner Function in Javascript | Stack Learner

// function something(greet, name){
//     function sayHi(){
//         console.log(greet, name)
//     }
//     sayHi()
// }

// something('Good Morning :-)','Tanvir Fahim')

//Good Morning :-) Tanvir Fahim

function something(greet, name){
    function getFirstName(){
    if(name){
        return name.split(' ')[0]
    }else{
        return ''
    }
}
    var message = greet+' '+getFirstName()
    console.log(message)
}

something('Good Morning :-)', 'Tanvir Fahim')