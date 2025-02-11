function getFibonator() {

    let a = 0;
    let b = 0;

    return function fib() {
        if (b === 0) {
            b = 1;
            return b;
        } else {
            newNumber = a + b;
            a = b;
            b = newNumber
            return b;
        }
    }


}