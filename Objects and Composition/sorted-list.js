function createSortedList(input) {

    let obj = {
        list: [],
        size: 0,

        sort(arr) {
            arr.sort((a, b) => a - b);
            return arr;
        },

        add(num) {
            this.list.push(num);
            this.size++;
            this.sort(this.list);
        },

        remove(index) {
            if (this.list[index] !== undefined) {
                this.list.splice(index, 1);
                this.size--;
            }
        },

        get(index) {
            if (this.list[index] !== undefined) {
                return this.list[index];
            }
        }

    }

    return obj;

}