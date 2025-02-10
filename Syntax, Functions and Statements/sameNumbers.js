function sameNumbers(input) {

    input = String(input);
    const end = String(input).length
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < end; i++) {
        sum += Number(input[i]);
        if (Number(input[i]) !== Number(input[0])) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum)

}