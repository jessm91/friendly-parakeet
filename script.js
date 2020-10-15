// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts displayed after button is clicked
function generatePassword() {
  var length = prompt("Please choose a character length between 12 and 128 for your new password");
  
  var lowerCase = confirm("Would you like lowercase letters in your new password?");

  var upperCase = confirm("Would you like uppercase letters in your new password?");

  var number = confirm("Would you like numbers in your new password?");

  var special = confirm("Would you like special characters in your new password?");
}