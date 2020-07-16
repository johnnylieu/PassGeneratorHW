// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['!', '@', '#', '$', '^', '*', '(', ')', '%', '&',', '*', '+', '-', '.', '/', '\', '<', ''>', '?','~'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Declaration
var confirmLength = '';
var confirmSpecialChars;
var confirmNumbers;
var confirmUpperCase;
Var confirmLowerCase;

// How many characters would you like in your password?
function genderatePassword () {
  var confirmLength = prompt("How many characters would you like in your password?")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
