// // Program that asks us for a name and an age. If the age is less than 18 years, it will show on the screen "Hello (name), you are a minor." If it is older, it will show on the screen "Hello (name), you are of legal age." Do it with CONDITIONAL TERNARY //


// With CONDITIONAL TERNARY //

let name = prompt(`Enter your name:`);
let age = parseInt(prompt(`Enter your age:`));
document.querySelector("div").innerHTML = age >= 18 ? `<p>Hello ${name}, you are of legal age.</p>` : `<p>Hello ${name}, you are a minor</p>`;