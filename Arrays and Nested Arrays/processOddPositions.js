function processOddPositions(input) {

    let result = [];

    for (let i = 1; i < input.length; i += 2) {
        result.push(input[i] * 2);
    }
    result.reverse();
    console.log(result.join(" "))
}