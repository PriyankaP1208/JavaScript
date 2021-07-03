const promt = require('prompt-sync')();

let no = promt("Enter a sigle digit number:");

if(no == 0)
    console.log("Zero");
else if (no == 1)
    console.log("One");
else if(no == 2)
    console.log("Two");
else if(no == 3)
    console.log("Three");
else if(no == 4)
    console.log("Four");
else if(no == 5)
    console.log("Five");
else if(no == 6)
    console.log("Six");
else if(no == 7)
    console.log("Seven");
else if(no == 8)
    console.log("Eight");
else if(no == 9)
    console.log("Nine");
else
    console.log("Invalid number");

