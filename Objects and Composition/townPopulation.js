function townPopulation(input) {

    let registry = new Map();

    for (let city of input) {
        let info = city.split(" <-> ");
        const name = info[0]
        const population = Number(info[1]);
        if (registry.has(name)) {
            registry.set(name, registry.get(name) + population);
        } else {
            registry.set(name, population);
        }

    }

    let cities = Array.from(registry);
    for (let citie of cities) {
        console.log(`${citie[0]} : ${citie[1]}`);
    }

}