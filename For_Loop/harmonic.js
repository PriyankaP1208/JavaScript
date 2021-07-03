const prompt = require ('prompt-sync')();

let harmonicNo = 1;
let no = prompt("Enter number:");

for (let i = 2; i <= no; i++ )
{
    let x = 1 / i;
    harmonicNo = harmonicNo + x;
}
console.log("Harmonic number is:" + harmonicNo);