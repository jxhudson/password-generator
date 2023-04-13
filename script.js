// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatedpassword = [];
var lowercaseletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialcharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+'];

function generatePassword() {
  var passwordlength = parseInt(prompt("Choose a Password Length, It needs to be between 8-128 characters")); // Turns String into a Number

  if (passwordlength < 129 && passwordlength > 7) // All must be true
  {
    alert('Good Choice! Off to a great start!'); } else { 
      alert("ERROR🤡🚨: Length needs to be between 8-128 characters");
      return "Try again";
    }
  

  if (confirm("Do you want password to contain lowercase letters?")) //
  {
    generatedpassword = generatedpassword.concat(lowercaseletters);
  }

  if (confirm("Do you want password to contain uppercase letters?")) //
  {
    generatedpassword = generatedpassword.concat(uppercaseletters);
  }

  if (confirm("Do you want password to contain numeric?")) //
  {
    generatedpassword = generatedpassword.concat(numeric);
  }

  if (confirm("Do you want password to contain special characters?")) //
  {
    generatedpassword = generatedpassword.concat(specialcharacters);
  }

}
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
