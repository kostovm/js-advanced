function biggerHalf(input) {

    let sorted = input.sort((a, b) => a - b);
    let result = sorted.slice(Math.floor(sorted.length / 2))

    return result;

}