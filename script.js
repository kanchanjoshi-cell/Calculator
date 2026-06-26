const display = document.getElementById('display');

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

// NEW: Decimal Point Protection
function appendDecimal() {
    const displayString = display.innerText;
    
    // Split the screen contents by operators to get the current working number
    const operations = displayString.split(/[\+\-\*\/]/);
    const currentNumber = operations[operations.length - 1];

    // If the current number doesn't already have a dot, allow adding one
    if (!currentNumber.includes('.')) {
        display.innerText += '.';
    }
}

// NEW: Backspace Function
function backspace() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0'; // Default to 0 if everything is deleted
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        const result = Function('"use strict";return (' + display.innerText + ')')();
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

// NEW: Dark/Light Mode Switcher Logic
function toggleTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

// NEW: Keyboard Support Listeners
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key)) appendNumber(key);                 // Detect numbers 0-9
    if (['+', '-', '*', '/'].includes(key)) appendOperator(key); // Detect operations
    if (key === '.') appendDecimal();                   // Detect decimal dot
    if (key === 'Enter' || key === '=') calculate();    // Enter runs evaluation
    if (key === 'Backspace') backspace();                // Backspace deletes char
    if (key === 'Escape' || key.toLowerCase() === 'c') clearDisplay(); // Escape clears screen
});