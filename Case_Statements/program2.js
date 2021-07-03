const promt = require('prompt-sync')();

let no = promt("Enter number:");

switch(Number(no))
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
            break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Number! Only Seven days are in one Week");
}