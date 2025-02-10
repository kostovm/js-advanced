function cookingByNumbers() {

    let number = Number(arguments[0]);

    const cookBook = {
        chop: (a) => a / 2,
        dice: (a) => Math.sqrt(a),
        spice: (a) => a + 1,
        bake: (a) => a * 3,
        fillet: (a) => a - (a / 5)
    }

    for (let i = 1; i < 6; i++) {
        number = cookBook[arguments[i]](number);
        console.log(number);
    }

}