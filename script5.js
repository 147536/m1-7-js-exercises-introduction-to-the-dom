// Program that asks for 2 numbers. Show on screen the addition, subtraction, multiplication, division and the remainder of those 2 numbers. Show each operation with a different color and background color.//

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

document.querySelector("div").innerHTML = `
<p id = "add">${num1 + num2}</p>
<p id = "subtract">${num1 - num2}</p>
<p id = "multiply">${num1 * num2}</p>
<p id = "divide">${num1 / num2}</p>
<p id = "remainder">${num1 % num2}</p>
`
document.querySelector("#add").style.color = "red"
document.querySelector("#add").style.backgroundColor = "yellow"

document.querySelector("#subtract").style.color = "white"
document.querySelector("#subtract").style.backgroundColor = "black"

document.querySelector("#multiply").style.color = "yelllow"
document.querySelector("#multiply").style.backgroundColor = "red"

document.querySelector("#divide").style.color = "black"
document.querySelector("#divide").style.backgroundColor = "purple"

document.querySelector("#remainder").style.color = "green"
document.querySelector("#remainder").style.backgroundColor = "gray"
