const promt = require('prompt-sync')();

let no = promt("Enter number:");

switch(Number(no))
{
    case 1:
        console.log("unit");
        break;
    case 10:
        console.log("Ten");
        break; 
    case 100:
        console.log("Hundread");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default:
        console.log("Invalid Number");
}