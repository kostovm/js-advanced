function argumentInfo(...params) {

    let typeList = new Map();

    for (let param of params) {
        let type = typeof param
        console.log(`${type}: ${param}`);

        if (typeList.has(type)) {
            typeList.set(type, typeList.get(type) + 1)
        } else {
            typeList.set(type, 1);
        }
    }

    let sortedList = Array.from(typeList).sort((a, b) => b[1] - a[1]);
    for (let type of sortedList) {
        console.log(`${type[0]} = ${type[1]}`)
    }

}