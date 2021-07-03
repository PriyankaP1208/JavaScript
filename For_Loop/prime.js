const prompt = require ('prompt-sync')();

let no = Number(prompt("Enter number:"));
let isPrime = true;

if(no > 1) 
{
    for (let i = 2; i <= no/2; i++ )
    {
        if((no % i) == 0)
        {
            isPrime = false;
            break;
        }
    }
    if(isPrime) 
    {
        console.log("Number is a prime numbe");
    } 
    else 
    {
        console.log("Number is not a prime number");
    }
}
else 
{
    console.log("The number is not a prime number.");
}