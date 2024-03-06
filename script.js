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

    if (b === 0) {
        return "LOL";
    } else {
        return a / b;
    }
}

function convertToExponent(s) {
    if (s.toString().length > 9) {
        return s.toExponential(1);
    } else {
        return s;
    }
}

let display = document.querySelector('#display');
let buttons = document.querySelector('#buttons');
let operand1;
let operand2;
let operator;
let solution;
let clear = true;

buttons.addEventListener('click', callbackFn);

function callbackFn(e) {
    // console.log(e.target);

    if (e.target.classList == "number other") {
        if (clear) {
            display.textContent = "";
            clear = false;
        }

        if (display.textContent.length < 9) {
            display.textContent += e.target.textContent;
        }

        // console.log(display.textContent.length);
    }

    else if (e.target.classList == "number decimal") {
        if (clear) {
            display.textContent = "0";
            clear = false;
        }

        if (display.textContent.length < 9) {
            if (!display.textContent.includes(".")) {
                display.textContent += e.target.textContent;
            }

            // console.log(display.textContent.length);
        }
    }

    else if (e.target.classList == "operator other") {

        if (operand1 === undefined) {
            operand1 = Number(display.textContent);
        } else {
            operand2 = Number(display.textContent);
            solution = operate(operand1, operand2, operator);
            display.textContent = convertToExponent(solution);

            console.log(operand1, operator, operand2);

            operand1 = solution;
        }

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

        clear = true;
    }

    else if (e.target.classList == "operator equality") {
        operand2 = Number(display.textContent);
        solution = operate(operand1, operand2, operator);
        display.textContent = convertToExponent(solution);

        console.log(operand1, operator, operand2);

        operand1 = undefined;
        operand2 = undefined;
        operator = undefined;
        solution = undefined;
        clear = true;
    }

    else {
        switch (e.target.textContent) {
            case "AC":
                operand1 = undefined;
                operand2 = undefined;
                operator = undefined;
                solution = undefined;
                display.textContent = "0";
                clear = true;
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