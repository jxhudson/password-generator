// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create function generatePassword()
// Function needs to set criteria
// ~ Password is greater than 8 characters and less than 128 characters
// ~ Choose between lowercase, uppercase, numeric, and/or special characters
// ~ Validates and at least one character type selected
// ~ Generates password that matches criteria

// Write password to the #password input
function writePassword() {
// Variable password is a result of the function generatePassword () which doesn't exist right now
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Prints password to screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
