const prompt = require ('prompt-sync')();

let no =prompt("Enter number:");
let fact = 1;

for(let i = 1; i <= no; i++)
{
        fact = fact * i;
}
console.log("Factorial of number is:" + fact);
