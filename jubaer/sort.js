var arr = [1,4,2,3,5,6,7,9,8]
var accending = arr.sort(function(a,b){
    return a - b
})

console.log(accending)

var decending = arr.sort(function(a,b){
    return b - a
})
console.log(decending)

var person = [
    {name:'A', age:'25'},
    {name:'B', age:'20'},
    {name:'C', age:'22'}
]

var per = person.sort(function(a,b){
    return a.age - b.age
})
console.log(per)