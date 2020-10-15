// Assignment code here

// Add event listener to generate button
document.querySelector("generate").addEventListener("click", writePassword);

// Arrays for password conditions


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
