// Get a reference to the display element so we can update it
const display = document.getElementById('display');

// This function adds clicked numbers to the display screen
function appendNumber(number) {
    // If the display currently shows just '0', replace it. Otherwise, add to it.
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

// This function adds clicked operators (+, -, *, /) to the display screen
function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    
    // Prevent adding two operators in a row (e.g., prevent "5++" or "5+-")
    if (['+', '-', '*', '/'].includes(lastChar)) {
        // Replace the old operator with the new one
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

// This function clears the entire screen back to 0
function clearDisplay() {
    display.innerText = '0';
}

// This function calculates the result when '=' is clicked
function calculate() {
    try {
        // eval() takes a string like "12+5" and computes the mathematical result
        // We use modern JavaScript features to handle calculation safety smoothly
        const result = Function('"use strict";return (' + display.innerText + ')')();
        
        // Update the display with the answer
        display.innerText = result;
    } catch (error) {
        // If the user typed something invalid, show an error
        display.innerText = 'Error';
    }
}

// This function clears the entire screen back to 0
function clearDisplay() {
    display.innerText = '0';
}

// This function calculates the result when '=' is clicked
function calculate() {
    try {
        // eval() takes a string like "12+5" and computes the mathematical result
        // We use modern JavaScript features to handle calculation safety smoothly
        const result = Function('"use strict";return (' + display.innerText + ')')();
        
        // Update the display with the answer
        display.innerText = result;
    } catch (error) {
        // If the user typed something invalid, show an error
        display.innerText = 'Error';
    }
}