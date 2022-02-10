const prompt = require("prompt-sync")();

let num = prompt("Enter some nummbers (Type done when completed): ")

let total = 0;
while (num !== "done"){

    total = total + parseInt(num);
    num = prompt("> ")
}

console.log("Your total is: " + total);