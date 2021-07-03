const prompt = require('prompt-sync')();

function degF(celcius) {
    return ((9 / 5) * celcius) + 32;
}

function degC(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

console.log(" 1.Celsius to Farenheit\n 2.Fahrenheit to celsius");
let choice = Number(prompt("Entet choice:"));
switch (choice) {
    case 1:
        let celsius = prompt("Enter temperature in celcius:");
        console.log("Temperature in Fahrenheit is : " + degF(celsius));
        break;
    case 2:
        let farenheit = prompt("Enter temperature in fahrenheit:");
        console.log("Temperature in Fahrenheit is : " + degC(farenheit));
        break;
    default:
        console.log("Wrong choice")
}