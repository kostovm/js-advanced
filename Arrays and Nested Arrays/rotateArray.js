function rotateArray(arr, rotations) {

    for (let rotationsCount = 0; rotationsCount < rotations; rotationsCount++) {
        let a = arr.pop();
        arr.unshift(a);
    }

    console.log(arr.join(" "));

}