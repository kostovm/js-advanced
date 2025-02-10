function janNotation(input) {

    let collection = [];

    let operandsDict = {
        '+'(a, b) {
            return a + b;
        },
        '-'(a, b) {
            return a - b;
        },
        '*'(a, b) {
            return a * b;
        },
        '/'(a, b) {
            return a / b;
        },
    }

    for (let command of input) {
        if (typeof command === "number") {
            collection.push(command);
        } else {
            if (collection.length >= 2) {
                let [a, b] = collection.splice(collection.length - 2);
                collection.push(operandsDict[command](a, b));
            } else {
                console.log(`Error: not enough operands!`);
                return;
            }
        }
    }

    console.log(collection.length === 1 ? collection[0] : 'Error: too many operands!');

}