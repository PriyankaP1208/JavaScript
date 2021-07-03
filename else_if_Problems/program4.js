const promt = require('prompt-sync')();

let a = promt("Enter number1:");
let b = promt("Enter number2:");
let c = promt("Enter number3:");

let operation1 = (a + b * c);
console.log("First result:" + operation1);

let operation2 = (a % b + c);
console.log("Second result:" + operation2);

let operation3 = (c + a / b);
console.log("Third result:" + operation3);

let operation4 = (a * b + c);
console.log("Fourth result:" + operation4);

if((operation1 > operation2) && (operation1 > operation3) && (operation1 > operation4))
    console.log("Maximum result:" + operation1);
else if((operation2 > operation1) && (operation2 > operation3) && (operation2 > operation4))
    console.log("Maximum result:" + operation2);
else if((operation3 > operation1) && (operation3 > operation2) && (operation3 > operation4))
    console.log("Maximum result:" + operation3);
else
    console.log("Maximum result:" + operation4);

if((operation1 < operation2) && (operation1 < operation3) && (operation1 < operation4))
    console.log("Minimum result:" + operation1);
else if((operation2 < operation1) && (operation2 < operation3) && (operation2 < operation4))
    console.log("Minimum result:" + operation2);
else if((operation3 < operation1) && (operation3 < operation2) && (operation3 < operation4))
    console.log("Minimum result:" + operation3);
else
    console.log("Minimum result:" + operation4);