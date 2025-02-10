function sortingNumbers(input) {

    const result = [];

    const sortedNumbers = input.sort((a, b) => a - b);
    const sortedNumbersReversed = [...sortedNumbers].reverse();

    for (let i = 0; i < input.length; i++) {
        result.push(sortedNumbers[i]);
        result.push(sortedNumbersReversed[i]);
    }
    return result.splice(0, result.length / 2);
}