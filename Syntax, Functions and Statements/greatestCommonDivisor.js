function greatestCommonDivisor(num1, num2) {

    let gCD = 0;
    const end = Math.min(num1, num2);

    for (let i = 1; i <= end; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gCD = i;
        }
    }

    console.log(gCD)

}