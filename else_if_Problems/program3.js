const promt = require('prompt-sync')();

let no = promt("Enter number:");

if(no == 1)
    console.log("unit");
else if(no == 10)
    console.log("Ten");
else if(no == 100)
    console.log("Hundred");
else if(no == 1000)
    console.log("Thousand");
else if(no == 10000)
    console.log("Ten Thousand");
else
    console.log("Invalid Number");