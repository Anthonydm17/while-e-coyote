const prompt = require("prompt-sync")();
const numlimit = 100
let num = Number(prompt("Enter a number: "));

    while (num < numlimit){
    console.log(num);
    num *= 2;       
}
console.log(num)

