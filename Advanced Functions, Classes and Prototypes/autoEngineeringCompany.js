function autoEngineeringCompany(input) {

    let producedCars = new Map();

    for (let line of input) {
        let carInfo = line.split(" | ");
        let brand = carInfo[0];
        let model = carInfo[1];
        let quantity = Number(carInfo[2]);

        if (producedCars.has(brand)) {
            if (producedCars.get(brand).has(model)) {
                producedCars.get(brand).set(model, producedCars.get(brand).get(model) + quantity);
            } else {
                producedCars.get(brand).set(model, quantity);
            };
        } else {
            let producedModels = new Map();
            producedModels.set(model, quantity);
            producedCars.set(brand, producedModels);
        }

    }

    let brandList = Array.from(producedCars);
    let result = [];
    for (let line of brandList) {
        let brand = line[0]
        result.push(brand);
        let brandModels = Array.from(producedCars.get(brand));
        for (let line of brandModels) {
            result.push(`###${line[0]} -> ${line[1]}`);
        }
    }

    return result.join(`\n`);

}


