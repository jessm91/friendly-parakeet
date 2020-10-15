// Assignment code here

// Add event listener to generate button

document.querySelector("#generate").addEventListener("click", writePassword);

// Return variables

var lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

const symbols = "!@#$%^&*()";
var symbol = symbols[Math.floor(Math.random() * symbols.length)];

// Variable confirm

var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumericCharacter;
var confirmSpecialCharacter;

// Prompt - Confirm character length

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like to use for your password?"));

// Loop if answer is too short or too long

while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters. Please try again.");
    var confirmLength = (prompt("How many characters would you like to use for your password?"));
    }

// Repeat how many characters the user has chosen
alert (`Your password will have ${confirmLength} chracters.`);

// Password parameters
var confirmLowerCase = confirm ("Click OK if you would like to include lowercase letters.");
var confirmUpperCase = confirm ("Click OK if you would like to include uppercase letters.");
var confirmNumericCharacter = confirm ("Click OK if you would like to include numbers.");
var confirmSpecialCharacter = confirm ("Click OK if you would like to include special characters.");
    // Loop if answer is outside the parameters
    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
      alert("You must choose at least one parameter");
      var confirmLowerCase = confirm ("Click OK if you would like to include lowercase letters.");
      var confirmUpperCase = confirm ("Click OK if you would like to include uppercase letters.");
      var confirmNumericCharacter = confirm ("Click OK if you would like to include numbers.");
      var confirmSpecialCharacter = confirm ("Click OK if you would like to include special characters.");
  }

// Action parameters

var passwordCharacters = []

if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lower)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(upper)
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number)
}

if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(symbol)
}

console.log (passwordCharacters)

// For loop

var randomPassword = ""

for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
