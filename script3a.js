// Program that asks us for a name and an age. If the age is less than 18 years, it will show on the screen "Hello (name), you are a minor." If it is older, it will show on the screen "Hello (name), you are of legal age." Do it with SWITCH //


// With SWITCH //

let name = prompt(`Enter your name:`);
let age = parseInt(prompt(`Enter your age:`));
let phrase = "";
switch (age) {
    case 1:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 2:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 3:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 4:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 5:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 6:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 7:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 8:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 9:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 10:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 11:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 12:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 13:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 14:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 15:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 16:
        phrase = `Hello ${name}, you are a minor.`;
        break;
    case 17:
        phrase = `Hello ${name}, you are a minor.`;
        break;

    default:
        phrase = `Hello ${name}, you are of legal age.`;
        break;
}
document.querySelector("div").innerHTML = `<p>${phrase}</p>`;


