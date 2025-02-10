function biggestElement(input) {

    let max = Number.MIN_SAFE_INTEGER;

    for (let arr of input) {
        let newMax = Math.max(...arr);
        if (newMax > max) {
            max = newMax;
        }
    }

    console.log(max);

}