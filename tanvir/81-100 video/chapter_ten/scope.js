// ***** 092 Scope in Javascript | Stack Learner

// {
//     var x = 55   
//     function test(){
//         // var x = 45
//         console.log(x)
//     }
//     test()
// }

// 55


// ***** 093 Nested Scope in Javascript | Stack Learner

{
    var x = 55   
    function test(){
        // var x = 45
        // console.log(x)

        function nested(){
            // var y = 65
            console.log(x)
        }
        
        // console.log(y)
        nested()
    }
    test()
}

// 55