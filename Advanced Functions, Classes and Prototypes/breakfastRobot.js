function solution() {

    let coockBook = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            fat: 0,
            protein: 0
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            fat: 0,
            protein: 0
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7,
            protein: 0
        },
        eggs: {
            carbohydrate: 0,
            flavour: 1,
            fat: 1,
            protein: 5
        },
        turkey: {
            carbohydrate: 10,
            flavour: 10,
            fat: 10,
            protein: 10
        }
    }

    let stock = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    return function manager(instructions) {

        let [command, product, quantity] = instructions.split(" ");

        switch (command) {
            case "restock": stock[product] += Number(quantity);
                return "Success";
            case "prepare":
                let coockingInProgress = true;
                let neededIngredients = Object.keys(stock);
                for (let ingredient of neededIngredients) {
                    if ((coockBook[product][ingredient] * Number(quantity)) > stock[ingredient]) {
                        coockingInProgress = false;
                        return `Error: not enough ${ingredient} in stock`;
                    }
                }
                for (let ingredient of neededIngredients) {
                    stock[ingredient] -= (coockBook[product][ingredient] * Number(quantity));
                }
                return "Success";
            case "report":
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        }

    }

}