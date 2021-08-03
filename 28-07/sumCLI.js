const prompt = require("prompt-sync");

const Prompt = prompt();

let num1 = parseInt(Prompt());
let num2 = parseInt(Prompt());

const sum = num1 + num2;

console.log("sum is:"+sum);
