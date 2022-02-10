const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter a number: "));

let n1 = number, n2 = number, nextTerm;

console.log("Fibonacci Series is as follows: ");

for (let i = 1; i <= 10; i++){
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm50
    
}