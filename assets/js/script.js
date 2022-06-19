// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Arrays for passwords 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperArray = Array(lowercase.toUpperCase());
var lowerArray = Array(lowercase);
var numberArray = Array(numbers);
var specialCharactersArray = Array(specialCharacters);


// Blank Arrays 

var generatePassword = function () { 
  var password = "";
  var finalArr = ""; 


  // Prompt to confirm password length 

  var confirmLength = parseInt(
    prompt('PLEASE SPECIFY THE NUMBER OF CHARACTERS YOU WOULD LIKE FOR YOUR PASSWORD. PASSWORD MUST BE 8-128 characters.')
  );

  // WHILE loop to confirm user choice 

  if (isNaN(confirmLength)) { 
    alert('PLEASE TRY AGAIN');
    return;
  }

  // confirmations to add characters 

  var confirmLowerCase = confirm( 
    "Include lower case characters for your password?"
  );

  var confirmCapitalCase = confirm( 
    "Include capital case characters for your password?"
  );

  var confirmSpecialChar = confirm( 
    "Include special characters for your password?"
  );

  var confirmNumber = confirm(
    "Include numbers for your password?"
  );

  // create final arrays based of user 

  if (confirmLowerCase) {
    finalArr = finalArr.concat(lowerArray);
  }

  if (confirmCapitalCase) {
    finalArr = finalArr.concat(upperArray);
  }

  if (confirmSpecialChar) {
    finalArr = finalArr.concat(specialCharacters);
  }

  if (confirmNumber) {
    finalArr = finalArr.concat(numberArray);
  }


  // combine final array with random element

  for (i = 0; i < confirmLength; i++) {
    password = password.concat(
      finalArr.charAt(Math.floor(Math.random() * finalArr.length))
    );
  }

  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);