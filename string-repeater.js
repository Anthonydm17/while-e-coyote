const prompt = require("prompt-sync")();
let text =(prompt("Enter a string: "));
let str = text;


let result = (text + text)

while(result.length < 10){
    console.log(result);
    result+= text;
}console.log(result)



    