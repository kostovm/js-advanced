function listOfNames(listOfNames) {

    let sortedNames = listOfNames.sort((a, b) => a.localeCompare(b));

    let number = 0;
    for (let name of sortedNames) {
        number++;
        console.log(`${number}.${name}`)
    }

}