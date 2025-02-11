(function arrayExtension() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let results = [];

        for (let i = n; i < this.length; i++) {
            results.push(this[i]);
        }

        return results;
    };
    Array.prototype.take = function (n) {
        let results = [];

        for (let i = 0; i < n; i++) {
            results.push(this[i]);
        }

        return results;
    };
    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        };
        return sum;
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };

})();