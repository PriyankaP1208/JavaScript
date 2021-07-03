const prompt = require('prompt-sync')();

const num = prompt('Enter number ');

function prime()
{
    let isPrime = true;
    if(num > 1) 
    {
        for (let i = 2; i <= num/2; i++ )
        {
            if((num % i) == 0)
            {
                isPrime = false;
                break;
            }
        }
        if(isPrime) 
        {
            return true;
        } 
        else 
        {
            return false;
        }
    }
    else 
    {
        return false;
    }
}

let rem = 0, sum = 0, temp = 0;
function isPalindrome(num)
{
    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = Math.floor(num / 10);
        sum = (sum * 10) + rem;
    }
    if(sum == temp)
        return sum;
}

if(prime(num))
    console.log("Number is Prime");
else
    console.log("Number is not Prime");

let palindrome = isPalindrome(num);
if (prime(sum))
        console.log("Palindrome number is also a prime number");
else
    console.log("Number is not palindrome");
