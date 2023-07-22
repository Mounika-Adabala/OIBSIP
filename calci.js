// Function to update the calculator display
function updateDisplay(value) {
    var display = document.forms["calculator"]["result"];
    display.value += value;
}

// Function to calculate the square of a number
function square() {
    var display = document.forms["calculator"]["result"];
    var result = parseFloat(display.value) ** 2;
    display.value = result;
}

// Function to calculate the cube of a number
function power() {
    var display = document.forms["calculator"]["result"];
    var result = parseFloat(display.value) ** 3;
    display.value = result;
}

// Function to calculate the square root of a number
function sqrt2() {
    var display = document.forms["calculator"]["result"];
    var result = Math.sqrt(parseFloat(display.value));
    display.value = result;
}

// Function to calculate the cube root of a number
function sqrt3() {
    var display = document.forms["calculator"]["result"];
    var result = Math.cbrt(parseFloat(display.value));
    display.value = result;
}

// Function to clear the calculator display
function remv() {
    document.calculator.result.value="";
}

// Function to remove the last character from the display
function backspc() {
    var display = document.forms["calculator"]["result"];
    display.value = display.value.slice(0, -1);
}

// Function to perform the arithmetic calculation
function equal() {
    var display = document.forms["calculator"]["result"];
    var expression = display.value;
    var result = eval(expression);
    display.value = result;
}

// Function to handle number button clicks
function number(value) {
    updateDisplay(value);
}
