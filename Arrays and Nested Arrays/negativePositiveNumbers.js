function negativePositiveNumbers(input) {

    let newArr = [];

    for (let el of input) {
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }

    for (let el of newArr) {
        console.log(el);
    }

}