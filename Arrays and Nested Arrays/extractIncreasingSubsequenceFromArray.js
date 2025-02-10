function extractIncreasingSubsequenceFromArray(input) {

    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        if (currentNumber >= biggest) {
            result.push(currentNumber);
            biggest = currentNumber;
        }
    }
    return result;
}