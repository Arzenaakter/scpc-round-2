// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters
function randomPassword() {
  let getPassword =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%4^&()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 6;
  let password = "";

  password += getRandomChar("abcdefghijklmnopqrstuvwxyz");
  password += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  password += getRandomChar("0123456789");
  password += getRandomChar("!@#$%4^&()");

  for (let i = 4; i < passwordLength; i++) {
    const element = Math.floor(Math.random() * getPassword.length);
    password += getPassword.substring(element, element + 1);
  }

  return password;
}

function getRandomChar(characters) {
  const element = Math.floor(Math.random() * characters.length);

  return characters.substring(element, element + 1);
}

console.log(randomPassword());
