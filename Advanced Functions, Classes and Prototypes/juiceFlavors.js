function juiceFlavors(arr) {

    let juiceses = {};
    let bottles = new Map()

    function bottleMaker(juice) {
        let newBottles = Math.floor(juiceses[juice] / 1000);

        if (bottles.has(juice)) {
            bottles.set(juice, bottles.get(juice) + newBottles);
        } else {
            bottles.set(juice, newBottles)
        };

        juiceses[juice] -= newBottles * 1000;
    }

    for (let line of arr) {
        let juiceInfo = line.split(" => ");
        let juice = juiceInfo[0];
        let quantity = Number(juiceInfo[1]);

        if (juiceses.hasOwnProperty(juice)) {
            juiceses[juice] += quantity;
        } else {
            juiceses[juice] = quantity;
        }

        if (juiceses[juice] >= 1000) {
            bottleMaker(juice);
        }

    }

    let bottlesAsArray = Array.from(bottles).map((b) => b.join(" => "));
    let result = bottlesAsArray.join(`\n`);

    return result;


}