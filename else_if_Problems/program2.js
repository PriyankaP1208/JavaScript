const promt = require('prompt-sync')();

let no = promt("Enter number:");

if(no == 1)
    console.log("Sunday");
else if(no == 2)
    console.log("Monday");
else if(no == 3)
    console.log("Tuesday");
else if(no == 4)
    console.log("Wednesday");
else if(no == 5)
    console.log("Thursday");
else if(no == 6)
    console.log("Friday");
else if(no == 7)
    console.log("Saturday");
else
console.log("Invalid Number! Only Seven days are in one Week");
