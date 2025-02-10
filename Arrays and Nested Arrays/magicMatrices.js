function magicMatrices(input) {

    let isMagic = true;

    const magicNumber = input[0].reduce((acc, a) => acc + a, 0);

    for (let i = 0; i < input.length; i++) {
        let currentColumSum = 0;
        let currentRowSum = input[i].reduce((acc, a) => {
            return acc + a;
        });
        for (let arr of input) {
            currentColumSum += arr[i];
        }
        if (currentColumSum !== magicNumber) {
            isMagic = false;
            break;
        } else if (currentRowSum !== magicNumber) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);

}