const promt = require('prompt-sync')();

console.log("1.Feet to Inch\n 2.Feet to Meter\n 3.Inch to Feet\n 4.Meter to Feet");
let choice = promt("Enter choice:");

switch(Number(choice))
{
    case 1:
        let feet = promt("Enter feet:");
        let feetToInch = feet * 12;
        console.log(feet + " feet = " + feetToInch + " inch");
        break;
    case 2:
        let feet1 = promt("Enter feet:");
        let feetToMeter = feet1 * 0.3048;
        console.log(feet1 + " feet = " + feetToMeter + " meter");
        break;
    case 3:
        let inch = promt("Enter inch:");
        let inchToFeet = inch * 0.0833;
        console.log(inch + " inch = " + inchToFeet + " feet");
        break;
    case 4:
        let meter = promt("Enter meter:");
        let meterToFeet = meter * 3.28084;
        console.log(meter + " meter = " + meterToFeet + " feet");
        break;
    default:
        console.log("Wrong choice");
}