function carFactory(requirements) {

    let newCar = {};

    newCar.model = requirements.model
    if (requirements.power <= 90) {
        newCar.engine = { power: 90, volume: 1800 };
    } else if (requirements.power <= 120) {
        newCar.engine = { power: 120, volume: 2400 };
    } else {
        newCar.engine = { power: 200, volume: 3500 }
    }
    newCar.carriage = {
        type: requirements.carriage,
        color: requirements.color
    }
    if (requirements.wheelsize % 2 === 0) {
        newCar.wheels = Array(4).fill(requirements.wheelsize - 1);
    } else {
        newCar.wheels = Array(4).fill(requirements.wheelsize);
    }

    return newCar;

}