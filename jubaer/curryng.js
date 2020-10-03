function curryng(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

var res = curryng(10)(10)(10)
console.log(res)