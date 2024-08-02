let display = document.getElementById('display');
let currentValue = '';

function inputValue(value) {
    if (currentValue === '0' && value === '0') return;
    if (currentValue === '0' && value !== '.') currentValue = '';
    currentValue += value;
    display.textContent = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.textContent = '0';
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        display.textContent = currentValue;
    } catch (e) {
        display.textContent = 'Error';
        currentValue = '';
    }
}
