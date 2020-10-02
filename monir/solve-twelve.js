// for(var i = 91; i <= 101; i++ ){
//     if( (i === 94)){
//         continue;
//     }else if((i === 97)){
//         continue;

//     }else if((i === 99)){
//         continue;

//     }else{
//         console.log(i);
//     }
   
// }

for(var i = 91; i <= 101; i++ ){
    if( (i %94 != 0)){
        continue;
    }else if((i %97 != 0)){
        continue;

    }else if((i %99 != 0)){
        continue;

    }else{
        console.log(i);
    }
   
}