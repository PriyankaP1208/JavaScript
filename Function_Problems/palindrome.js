const prompt = require('prompt-sync')();

const num1 = prompt('Enter number ');
const num2 = prompt('Enter number ');

let rem = 0, sum = 0;
function isPalindrome(num1, num2) {
    while (num1 > 0) {
        rem = num1 % 10;
        num1 = Math.floor(num1 / 10);
        sum = (sum * 10) + rem;
    }
    if (num2 == sum) {
        console.log("Number is palindrome");
    }
    else {
        console.log("Number is not palindrome");
    }
}

isPalindrome(num1, num2);