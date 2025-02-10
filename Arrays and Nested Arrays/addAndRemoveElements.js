function addAndRemoveElements(commands) {

    let currentNumber = 0;
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        currentNumber++;

        if (currentCommand === "add") {
            result.push(currentNumber);
        } else {
            result.pop();
        }
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        for (let el of result) {
            console.log(el);
        }
    }

}