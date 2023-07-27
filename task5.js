// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, num2, operator) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "invalid Number";
  }
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  } else {
    return "Invalid Operator";
  }
}
console.log(calculator(10, 5, "-"));
