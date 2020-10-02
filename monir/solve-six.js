var arr =[7,8,10,-2,-1,5,4,3]


arr.sort(function(a,b){
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
});

console.log(arr);

