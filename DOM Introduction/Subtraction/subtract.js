function subtract() {
    let firstNumber = document.getElementById(`firstNumber`);
    let secondNumber = document.getElementById(`secondNumber`);
    let num1 = Number(firstNumber.value);
    let num2 = Number(secondNumber.value);

    let result = num1 - num2;

    document.getElementById(`result`).textContent = result;

}