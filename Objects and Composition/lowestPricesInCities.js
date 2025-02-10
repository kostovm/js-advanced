function lowestPricesInCities(input) {

    const order = [];
    const lowestPrice = {};

    for (const line of input) {
        const data = line.split(" | ");
        const town = data[0];
        const product = data[1];
        const price = Number(data[2]);

        if (!order.includes(product)) {
            order.push(product);
        }

        if (!lowestPrice.hasOwnProperty(product)) {
            lowestPrice[product] = {
                town: town,
                price: price
            }
        } else {
            if (lowestPrice[product].price > price) {
                lowestPrice[product] = {
                    town: town,
                    price: price
                }
            }
        }

    }

    for (product of order) {
        console.log(`${product} -> ${lowestPrice[product].price} (${lowestPrice[product].town})`);
    }
}