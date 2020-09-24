//035. What is Continue Statement in Javascript

//Continue Statement

for(var i = 0; i<10 ; i++){
    if(i == 3 || i == 7){
        continue
    }else{
        console.log(i)
    }
}

// 0
// 1
// 2
// 4
// 5
// 6
// 8
// 9