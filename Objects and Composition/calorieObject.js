function calorieObject(input) {

    let foodInformation = {};
    for (let i = 0; i < input.length; i += 2) {
        foodInformation[input[i]] = Number(input[i + 1]);
    }
    console.log(foodInformation)

}