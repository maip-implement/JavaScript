let a = 'abc'  //can access everywhere

if (true) {
    if (true) {
        const b = 'b'
    }
}

// console.log(b)  // b in not defined






function x() {
    let a = 10

    function y() {
        let a = 20
        console.log(a)  // 20
    }

    y()
    console.log(a)  // 10
}

x()





function test(n) {
    function a() {
        return n%3 === 0
    }

    function b() {
        return n%5 === 0
    }

    if (a() && b()) {
        console.log(n, 'is divisible by both 3 and 5')
    } else {
        console.log('Not a valid number')
    }
}

test(15)
