// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reversedStringFunc(givenString) {
  let reverseString = "";
  for (let i = givenString.length - 1; i >= 0; i--) {
    reverseString += givenString[i];
  }
  console.log(reverseString);
}

reversedStringFunc("Programming");
