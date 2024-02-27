function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, o) {
    switch (o) {
        case "+": add(x, y);
            break;
        case "-": subtract(x, y);
            break;
        case "*": multiply(x, y);
            break;
        case "/": divide(x, y);
    }
}

console.log(add(1, 2, "+"));
console.log(subtract(1, 2, "-"));
console.log(multiply(1, 2, "*"));
console.log(divide(1, 2, "/"));