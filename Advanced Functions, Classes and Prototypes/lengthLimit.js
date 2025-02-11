class Stringer {

    constructor(string, length) {
        this.innerString = string,
            this.innerLength = Number(length)
    }

    increase(n) {
        this.innerLength += Number(n);
    }

    decrease(n) {
        this.innerLength -= Number(n);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else {
            let result = (this.innerString.substring(0, this.innerLength) + "...");
            return result
        }
    }

}