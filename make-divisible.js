const prompt = require("prompt-sync")();
let x = Number(prompt("Enter your first number: "))
let y = Number(prompt("Enter your second number: "))




while(x % y !== 0){
    console.log(x);
    x+= 1;
}
console.log(x + " is divisible by " + y )
