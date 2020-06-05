'use strict'
/* Укоротил свои функции из 4 задания, добавил конструкцию из свитч-кейса */
function addition(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function division(a,b) {
    return a / b;
}

function multiplication(a,b) {
    return a * b;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "addition":
            return addition(arg1, arg2);
        case "subtraction":
            return subtraction(arg1, arg2);
        case "division":
            return division(arg1, arg2);
        case "multiplication":
            return multiplication(arg1, arg2);
    }
}

let arg1 = +prompt("Введите первое число");
let arg2 = +prompt("Введите второе число");
let operation = prompt("Выберите операцию: addition, subtraction, division, multiplication");


console.log(mathOperation(arg1, arg2, operation));