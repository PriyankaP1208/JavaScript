const prompt = require ('prompt-sync')();

let no1 =prompt("Enter first number:");
let no2 =prompt("Enter second number:");
let count = 0;

for (let i = no1; i <= no2; i++)
{
    count = 0;
    for(let j = 2; j < i; j++)
    {
        if((i % j) == 0)
        {
            count = 1;
            break;
        }
    }
    if(count == 0)
            console.log(i);
}