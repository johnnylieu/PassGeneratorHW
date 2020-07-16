// Assignment Code
// var generateBtn = document.querySelector("#generate").addEventListener("click", generatePassword);
document.querySelector("#generate").addEventListener("click", generatePassword);

// Arrays
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '$', '%', '&', '+', '-', '.', '?', '~'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Variables
var confirmLength = '';
var confirmSpecialChars;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;

// How many characters would you like in your password?
function generatePassword() {
  var confirmLength = prompt("How many characters would you like in your password?");
}

// Loop back if not valid selection
while(confirmLength <= 7 || confirmLength >= 129) {
  alert("Password must be within 8 to 128 characters, please try again.");
  var confirmLength = prompt("How many characters would you like in your password?");
}

// Confirm characters
alert("Your password length is " + confirmLength + " characters");

// Options for the user
var confirmSpecialChars = confirm("Click ok if you want special characters in your password.");
var confirmNumbers = confirm("Click ok if you want numbers in your password.");
var confirmUpperCase = confirm("Click ok if you want upper cases in your password");
var confirmLowerCase = confirm("Click ok if you want lower cases in your password");

// If user does not choose any options, then loop back
while(confirmSpecialChars === false && confirmNumbers === false && confirmUpperCase === false && confirmLowerCase === false) {
  alert("Please choose at least one parameter");
  var confirmSpecialChars = confirm("Click ok if you want special characters in your password.");
  var confirmNumbers = confirm("Click ok if you want numbers in your password.");
  var confirmUpperCase = confirm("Click ok if you want upper cases in your password");
  var confirmLowerCase = confirm("Click ok if you want lower cases in your password");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}