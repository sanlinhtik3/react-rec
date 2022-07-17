function go(a) {
    return function(b) {
        return a + b
    }
}

// const addFour = go(4)

let pp = function(b) {
    return 4 + b
}

pp(2)  // 6

go(4)(2)  // 6