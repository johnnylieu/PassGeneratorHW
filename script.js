// Assignment Code
var generateBtn = document.querySelector("#generate");

// introduction
alert("Welcome to Password Generator by Johnny L. Click on 'Generate Password' & follow the prompts to begin.")

function generatePassword() {

  // Arrays
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var chars = ['!', '@', '$', '%', '&', '+', '-', '.', '?', '~'];
  var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Variables
  var confirmLength = '';
  var confirmSpecialChars;
  var confirmNumbers;
  var confirmUpperCase;
  var confirmLowerCase;

  // How many characters would you like in your password?
  function writePassword() {
    confirmLength = prompt("How many characters would you like in your password?");
  }
  writePassword()

  // Loop back if not valid selection
  while (confirmLength < 8 || confirmLength > 128) {
    alert("Password must be within 8 to 128 characters, please try again.");
    confirmLength = prompt("How many characters would you like in your password?");
  }

  // Confirm characters
  alert("Your password length is " + confirmLength + " characters");

  // Options for the user
  confirmSpecialChars = confirm("Click ok if you want special characters in your password.");
  confirmNumbers = confirm("Click ok if you want numbers in your password.");
  confirmUpperCase = confirm("Click ok if you want upper cases in your password");
  confirmLowerCase = confirm("Click ok if you want lower cases in your password");

  // If user does not choose any options, then loop back
  while (confirmSpecialChars === false && confirmNumbers === false && confirmUpperCase === false && confirmLowerCase === false) {
    alert("Please choose at least one parameter");
    confirmSpecialChars = confirm("Click ok if you want special characters in your password.");
    confirmNumbers = confirm("Click ok if you want numbers in your password.");
    confirmUpperCase = confirm("Click ok if you want upper cases in your password");
    confirmLowerCase = confirm("Click ok if you want lower cases in your password");
  }

  // If all 4 options are chosen
  if (confirmSpecialChars && confirmNumbers && confirmUpperCase & confirmLowerCase) {
    options = chars.concat(numbers, uppers, lowers)
  }

  // 3 options
  else if (confirmSpecialChars && confirmNumbers && confirmUpperCase) {
    options = chars.concat(numbers, uppers);
  } else if (confirmSpecialChars && confirmNumbers && confirmLowercase) {
    options = chars.concat(numbers, lowers);
  } else if (confirmSpecialChars && confirmLowerCase && confirmUpperCase) {
    options = chars.concat(lowers, uppers);
  } else if (confirmNumbers && confirmLowerCase && confirmUpperCase) {
    options = numbers.concat(lowers, uppers)
  }

  // 2 options
  else if (confirmSpecialChars && confirmNumbers) {
    options = chars.concat(numbers);
  } else if (confirmSpecialChars && confirmLowerCase) {
    options = chars.concat(lowers);
  } else if (confirmSpecialChars && confirmUpperCase) {
    options = chars.concat(uppers);
  } else if (confirmLowerCase && confirmNumbers) {
    options = lowers.concat(numbers);
  } else if (confirmLowerCase && confirmUpperCase) {
    options = lowers.concat(uppers);
  } else if (confirmNumbers && confirmUpperCase) {
    options = numbers.concat(lowers);
  }

  // 1 option
  else if (confirmSpecialChars) {
    options = chars;
  } else if (confirmNumbers) {
    options = numbers;
  } else if (confirmUpperCase) {
    options = uppers;
  } else if (confirmLowerCase) {
    options = lowers;
  }

  // options are returned as a password
  var password = [];

  // random selection using JS math code
  for (var i = 0; i < confirmLength; i++) {
    var userOptions = options[Math.floor(Math.random() * options.length)];
    password.push(userOptions);
  }
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);