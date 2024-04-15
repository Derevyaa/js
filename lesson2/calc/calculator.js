document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('calculator-display');
    let currentOperand = '';
    let previousOperand = '';
    let operation = null;

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => appendNumber(button.getAttribute('data-number')));
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => setOperation(button.getAttribute('data-operator')));
    });

    document.querySelector('.equals').addEventListener('click', compute);
    document.querySelector('.clear').addEventListener('click', clear);

    function appendNumber(number) {
        if (display.value.includes('.') && number === '.') return;
        currentOperand = currentOperand.toString() + number.toString();
        updateDisplay();
    }

    function setOperation(operator) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = operator;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert("Cannot divide by zero.");
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        currentOperand = computation;
        operation = undefined;
        previousOperand = '';
        updateDisplay();
    }

    function clear() {
        currentOperand = '';
        previousOperand = '';
        operation = undefined;
        updateDisplay();
    }

    function updateDisplay() {
        display.value = currentOperand;
    }
});
