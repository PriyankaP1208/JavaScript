const prompt = require ('prompt-sync')();

let no = prompt("Enter number:");
for (let i = 1; i <= no; i++ )
{
    console.log(2**i);
}
