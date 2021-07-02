const prompt = require('prompt-sync')();
let year = prompt("Enter year:");

if(year >= 1000 && year <= 9999)
{
    if(year % 4 == 0)
        console.log("Leap Year");
    else
        console.log("Not a leap year")
}
else
    console.log("Enter correct year format");
