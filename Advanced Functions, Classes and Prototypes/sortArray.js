function sortArray(arr, command) {

    if (command === 'asc') {
        arr.sort((a, b) => a - b);
    } else {
        arr.sort((a, b) => b - a);
    }

    return arr;

}