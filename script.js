function operate(a, b, o) {
    switch (o) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "×": return multiply(a, b);
        case "÷": return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let display = document.querySelector('#display');
let buttons = document.querySelector('#buttons');
let operand1 = "";
let operator = "";
let operand2 = "";
let clear = false;

buttons.addEventListener('click', callbackFn);

function callbackFn(e) {
    // console.log(e.target);

    if (e.target.classList == "number") {
        if (clear) {
            display.textContent = "";
            clear = false;
        }
        display.textContent += e.target.textContent;
    }

    else if (e.target.classList == "operator other") {
        operand1 = Number(display.textContent);
        clear = true;
        switch (e.target.textContent) {
            case "+":
                operator = "+";
                break;
            case "-":
                operator = "-";
                break;
            case "×":
                operator = "×";
                break;
            case "÷":
                operator = "÷";
        }
    }

    else if (e.target.classList == "operator equal") {
        operand2 = Number(display.textContent);
        console.log(operand1, operator, operand2);
        display.textContent = operate(operand1, operand2, operator);
    }

    else {
        switch (e.target.textContent) {
            case "AC":
                display.textContent = "";
                break;
            case "DEL":
                display.textContent = display.textContent.slice(0, display.textContent.length - 1);
                break;
            case "+/-":
                display.textContent *= -1;
        }
    }
}



























// console.log(add(1, 2, "+"));
// console.log(subtract(1, 2, "-"));
// console.log(multiply(1, 2, "*"));
// console.log(divide(1, 2, "/"));