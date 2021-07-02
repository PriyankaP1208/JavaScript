const prompt = require('prompt-sync')();
let day = prompt("Enter day:");
let month = prompt("Enter month:");

if((month == 3 && 20 > day <= 31) || (month == 4 && 1 > day <= 30) || (month == 5 && 1> day <= 31) || (month == 6 && 1 > day <= 30))
    console.log("True");
else
    console.log("False");
