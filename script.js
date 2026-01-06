const resultInput = document.getElementById('result');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    resultInput.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== '') {
        calculateResult();
    }
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (firstOperand === '' || currentInput === '') return;
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return;
    }

    resultInput.value = result;
    firstOperand = result;
    currentInput = '';
    operator = '';
}

function clearResult() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    resultInput.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    resultInput.value = currentInput;
}
