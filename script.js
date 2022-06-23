const operatorVar = prompt("Enter the operator (+ - * or /):");
const number1 = prompt("Enter first number:");
const number2 = prompt("Enter second number:");
if (operatorVar == "*") {
  result = number1 * number2;
} else if (operatorVar == "-") {
  result = number1 - number2;
} else if (operatorVar == "/") {
  result = number1 / number2;
} else if (operatorVar == "+") {
  result = parseInt(number1) + parseInt(number2);
} else {
  alert("Invalid Operator");
}
alert("The result is " + result);
