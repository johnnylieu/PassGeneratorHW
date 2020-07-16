// Assignment Code
// var generateBtn = document.querySelector("#generate").addEventListener("click", generatePassword);
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['!', '@', '$', '%', '&', '+', '-', '.', '?','~'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Variables
var confirmLength;
var confirmSpecialChars;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;

// How many characters would you like in your password?
function writePassword () {
  var confirmLength = prompt("How many characters would you like in your password?");
}

// Loop back if not valid
if (confirmLength <= 7 || confirmLength >= 129) {
  alert("Password must be within 8 to 128 characters, please try again.");
  var confirmLength = prompt("How many characters would you like in your password?");
}

// Confirm characters
  alert("Your password length is " + confirmLength + " characters");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }