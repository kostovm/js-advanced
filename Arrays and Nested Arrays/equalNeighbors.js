function equalNeighbors(input) {

    let pairCounter = 0;

    for (let i = 0; i < input.length; i++) {
        let currentArr = input[i];
        let lastNumber = undefined;
        for (let j = 0; j < currentArr.length; j++) {
            let currentNumber = currentArr[j];
            if (currentNumber == lastNumber) {
                pairCounter += 1;
            }
            lastNumber = currentNumber;
        }
    }

    for (let k = 0; k < input[0].length; k++) {
        let lastNumber = undefined;
        for (let l = 0; l < input.length; l++) {
            let currentNumber = input[l][k];
            if (currentNumber == lastNumber) {
                pairCounter += 1;
            }
            lastNumber = currentNumber;
        }
    }

    console.log(pairCounter);

}