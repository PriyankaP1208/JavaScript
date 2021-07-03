const prompt = require ('prompt-sync')();

let no = prompt("Enter number:");

for(let i = 2; i <no/i; i++)
{
    while(no % i == 0)
    {
        no = no / i;
    }
}
console.log(no);
