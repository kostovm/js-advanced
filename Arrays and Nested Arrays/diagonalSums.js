function diagonalSums(input) {

    let mainSum = 0;
    let secondarySum = 0;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let arr2 = input[i].slice().reverse();
        mainSum += input[i][i];
        secondarySum += arr2[i];
    }

    result.push(mainSum);
    result.push(secondarySum);
    console.log(result.join(" "));

}