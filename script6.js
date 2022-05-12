// Program that asks what operation you want to perform (Addition, Subtraction, Multiplication, Division or Remainder). Then it will ask you for two numbers and the two numbers entered and the result of the operation will appear visually. //

let typeOperation = prompt("Enter the type of operation you want to perform (addition, subtraction, multiplication, division, or remainder:").toLowerCase();

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

let arithmeticOperator;
let result;

switch (typeOperation) {
    case "addition":
        arithmeticOperator = "+";
        result = num1 + num2;
        break;

    case "subtraction":
        arithmeticOperator = "-";
        result = num1 - num2;
        break;

    case "multiplication":
        arithmeticOperator = "x";
        result = num1 * num2;
        break;

    case "division":
        arithmeticOperator = "/";
        result = num1 / num2;
        break;

    case "remainder":
        arithmeticOperator = "%";
        result = num1 % num2;
        break;

    default:
        document.querySelector("div").innerHTML = `<p style="color: red">Enter a valid operation</p>`;
        break;
}

if (arithmeticOperator != undefined) {
    document.querySelector("div").innerHTML = `<p>${num1} ${arithmeticOperator} ${num2} = ${result}</p>`;
}

