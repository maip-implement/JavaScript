// Arrray Reversing

//Swapping
var arr = [1, 3, 4, 5, 6, 7, 7, 765, 34, 54]

for(i = 0; i < (arr.length / 2); i++){
    temp = arr[i]
    arr[i] = arr[arr.length - 1 -i]
    arr[arr.length - 1 -i] = temp
}

console.log(arr) //reversed by swapping



//Another way
var arr2 = [1, 3, 4, 5, 6, 7, 10, 7, 765, 34, 54]
var reverseArr = []

for(i = arr2.length; i > 0; i--){
    reverseArr.push(arr2[i - 1])
}

console.log(reverseArr) //reversed by changing loop style or whatever it is



//Built in way (Easiest)
var arr3 = [1, 3, 4, 5, 6, 7, 10, 7, 765, 34, 54]

console.log(arr3.reverse())