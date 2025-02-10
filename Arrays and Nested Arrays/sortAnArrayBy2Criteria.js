function sortAnArrayBy2Criteria(input) {

    let sorted = input.sort((a, b) => { return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()) })

    for (let el of sorted) {
        console.log(el);
    }

}