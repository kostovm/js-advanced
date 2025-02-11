function add(num) {

    let sum = 0;

    sum += num;

    function calc(anotherNum) {
        sum += anotherNum;
        console.log(sum)
        return calc;
    }

    calc.toString = () => sum;

    return calc;

}
