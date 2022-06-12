// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePasword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Arrays for passwords 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
