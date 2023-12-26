/*let firstName = window.prompt("Enter your first name");
let lastName = window.prompt("Enter your last name");

let birthyear = window.prompt("Enter your birthday year");
let years = 2023 - Number(birthyear);
alert(`welcome to this page ${firstName} ${lastName} , you are ${years} years old`);*/

alert(
  "its the first release of a calculator that only has a summation feature."
);

let num1 = prompt("Enter first number.");
num1 = Number(num1);

let num2 = prompt("Enter second number.");
num2 = Number(num2);

let result = num1 + num2;
document.write(`The Result: ${num1} + ${num2} = ${result}`);