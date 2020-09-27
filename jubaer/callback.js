function sample(a, b, callback){
    var c = a + b;
    var d = a - b;

    return callback(c, d)
}

console.log(sample(10,20, function(c, d){
    return c + d
}))