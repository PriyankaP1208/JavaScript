const prompt = require('prompt-sync')();
let no = prompt("Enter number:");

let count = 1;
let a = 0

while(count <= no && a!=256)
{
    a = 2 ** count;
    console.log(a);
    count++;
}
