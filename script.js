// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Arrays
  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChar = ['!', '@', '$', '%', '&', '+', '-', '.', '?', '~'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Variables
  var confirmLength='';
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
  while(confirmLength <= 7 || confirmLength >= 129) {
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
  while(confirmSpecialChars === false && confirmNumbers === false && confirmUpperCase === false && confirmLowerCase === false) {
    alert("Please choose at least one parameter");
    confirmSpecialChars = confirm("Click ok if you want special characters in your password.");
    confirmNumbers = confirm("Click ok if you want numbers in your password.");
    confirmUpperCase = confirm("Click ok if you want upper cases in your password");
    confirmLowerCase = confirm("Click ok if you want lower cases in your password");
  }

  // If all 4 options are chosen
  if (confirmSpecialChars && confirmNumbers && confirmUpperCase & confirmLowerCase) {
    options = confirm.concat(numbers, chars, uppers, lowers)
  }

  // 3 options

  else if (confirmSpecialChars && confirmNumbers && confirmUpperCase) {
    options = confirm.concat(chars, numbers, uppers);
  } else if (confirmSpecialChars && confirmNumbers && confirmLowercase) {
    options = confirm.concat(chars, numbers, lowers);
  } else if (confirmSpecialChars && confirmLowerCase && confirmUpperCase) {
    options = confirm.concat(chars, lowers, uppers);
  } else if (confirmNumbers && confirmLowerCase && confirmUpperCase) {
    options = confirm.concat(numbers, lowers, uppers)
  }

  // 2 options
  else if (confirmSpecialChars && confirmNumbers) {
    options = confirm.concat(chars, numbers);
  } else if (confirmSpecialChars && confirmLowerCase) {
    options = confirm.concat(chars, numbers);
  } else if (confirmSpecialChars && confirmUpperCase) {
    options = confirm.concat(chars, uppers);
  } else if (confirmLowerCase && confirmNumbers) {
    options = confirm.concat(lowers, numbers);
  } else if (confirmLowerCase && confirmUpperCase) {
    options = confirm.concat(lowers, uppers);
  } else if (confirmNumbers && confirmUpperCase) {
    options = confirm.concat(numbers, lowers);
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

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
