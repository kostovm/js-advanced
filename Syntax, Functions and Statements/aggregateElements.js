function aggregateElements(input) {

    let sum = 0;
    let inverseSum = 0;
    let concatinate = "";
    for (let el of input) {
        sum += el;
        inverseSum += 1 / el;
        concatinate += el;
    }
    console.log(sum)
    console.log(inverseSum)
    console.log(concatinate)

}