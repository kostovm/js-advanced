class List {

    constructor() {
        this.arr = []
        this.size = 0;
    }

    sortArr() {
        this.arr.sort((a, b) => a - b);
    };

    updateSize() {
        this.size = this.arr.length;
    }

    get(i) {
        if (this.arr[i] != undefined) {
            return this.arr[i];
        }
    }

    remove(i) {
        if (this.arr[i] === undefined) {
            return;
        }

        this.arr.splice(i, 1);
        this.updateSize();
        this.sortArr();
    }

    add(num) {
        this.arr.push(num);
        this.sortArr();
        this.updateSize();
    }

}