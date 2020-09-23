//loop is itereting over anything

for(let i =0; i<=10; i++){ //here i set initial value from zero and its iterating 10
    console.log('hello') //this massage print 10 times
}

var arr= [1,2,3,5,6,7,8,9,10]
var storeArr;

for(let i = 0; i<=arr.length; i++){
    storeArr = arr[i]
    console.log(storeArr)
}

for (let i = 0; i<arr.length; i++){
    if(arr[i]%2 === 0){
        console.log('fapp' + arr[i] + 2)
    }else{
        console.log('bird')
    }
}

var even = 0;
var odd = 0;
for(let i=1; i<=10; i++){
    if(i%2 === 0){
        even += i;
        console.log( "even" + " " + even +  " % " + i + " = " + even)
    }else if(i % 2 === 1){
        odd += i;
        console.log(`odd number: ${odd} % ${i} = ${odd}`)
    }
   
}
 

