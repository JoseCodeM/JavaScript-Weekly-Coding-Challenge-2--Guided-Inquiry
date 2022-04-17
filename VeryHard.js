const num1 = prompt("Please enter a number:");
const operator = prompt("Please enter an operator 'either +, -, *, or /':");
const num2 = prompt("please enter a 2nd number:");

//Functions
function add(number1,number2) {
    number1 = Number(num1);
    number2 = Number(num2);
    let result = number1 + number2;
    alert(`${number1} + ${number2} = ${result}`)
}

function subtract(number1,number2) {
    number1 = Number(num1);
    number2 = Number(num2);
    let result = number1 - number2;
    alert(`${number1} - ${number2} = ${result}`)
}

function multiply(number1,number2) {
    number1 = Number(num1);
    number2 = Number(num2);
    let result = number1 * number2;
    alert(`${number1} * ${number2} = ${result}`)
}

function divide(number1,number2) {
    number1 = Number(num1);
    number2 = Number(num2);
    let result = number1 / number2;
    alert(`${number1} / ${number2} = ${result}`)
}

// if else statements
if (operator == "+") {
    add();
}
else if (operator == "-") {
    subtract();
}
else if (operator == "*") {
    multiply();
}
else if (operator == "/") {
    divide();
}