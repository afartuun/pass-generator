// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberCharacters = '1234567890';
var specialCharacters = '!@#$%^&*()_-+=~[]{}<>/?';

 

//confirming whether user wants to use uppercase, lowercase, special, or number characters
function generateCharacters() {
  var generatedPassword = '';
  var characList = "";

var range = prompt('Input a number that is between 8 and 128 characters');
  
//making sure the password is accepted if characters are between 8 and 150
  if (range < 8 || range > 128 ) {
    //re prompting if it does not meet the standards
    alert ("Please type a new number that is between 8 and 128 characters");
    return;
  }
  //verfying weather user
var uppercase = confirm('Would you like to use uppercase letters?');
var lowercase = confirm('Would you like to use lowercase letters?');
var special = confirm('Would you like to use special characters?' );
var numbers = confirm('Would you like to use number characters?');

if (lowercase === true) {
  characList += lowercaseCharacters;
}
if (uppercase === true) {
  characList += uppercaseCharacters;
}
if (special === true) {
  characList += specialCharacters;
}
if (numbers === true) {
  characList += numberCharacters;
}



for (var i = 0; i < range; i++) {
  var random = characList.charAt(Math.floor(Math.random() * characList.length));
  generatedPassword = generatedPassword.concat(random)
}
return generatedPassword
}

// Write password to the #password input
function writePassword() {
  // regCharacters = generateCharacters();
  // if (regCharacters !== 'There are no selected characters');
  //   var range = verifyRange();
  // if (range !== 'Number is above 128' && range !== 'Number is below 8') 
    var password = generateCharacters();
    var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
