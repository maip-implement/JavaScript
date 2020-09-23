const date = new Date()

console.log(date)  // 2020-09-23T12:20:07.332Z
console.log(typeof date)  //object

console.log(date.toString())  // Wed Sep 23 2020 20:21:12 GMT+0800 (China Standard Time)
console.log(date.toDateString())  // Wed Sep 23 2020
console.log(date.toTimeString()) // 20:30:14 GMT+0800 (China Standard Time)
console.log(date.toLocaleString())  // 9/23/2020, 8:30:14 PM

console.log(date.getFullYear())  // 2020
console.log(date.getMonth())  // 8
console.log(date.getDate())  // 23

console.log(date.getDay())  // 3

console.log(date.getHours())  // 20
console.log(date.getMinutes())  // 31
console.log(date.getSeconds())  // 33
console.log(date.getMilliseconds())  // 637
