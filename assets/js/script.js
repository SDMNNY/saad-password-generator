// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

funtion generatePassword () {
  var passwordLength = Math.floor (
    prompt (
      "How long do you want the password to be? Choose a password between 8 to 128 characters"

    )
  );
if (!NaN(passwordLength) && passwordLength >= 8 && passwordLength <=128) {
  var specialChar = confrim("Do you special character?");
  var numericalChar = confirm("Do you want numerical characters?");
  var upperChar = confirm("Do you want uppercase characters?");
  var lowerChar = confirm ("DO you wnat lowercase characters?");
  if (
    !specialChar &&
    !numericalChar &&
    !upperChar &&
    !lowerChar
  ) {
    alert ("Choose at least one options!");
    var wantToContinue = confirm("Do you still want to generate a password?");
    if (wantToContinue) {
      generatePassword ();
    }
  } else {
    var finalPassword = [""]
  }
