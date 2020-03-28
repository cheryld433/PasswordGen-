// Variables  
var passwordlength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specChar = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";

//Password Length
var passwordlength = parseInt(prompt("Enter length of password. Number must be between 8-128 characters"));

//Must input a number
while (isNaN(passwordlength)) {
  var passwordlength = parseInt(prompt("This is not a number. Please enter a number between 8 - 128."));
} 
//Password stipulations
while (passwordlength < 8 || passwordlength > 128){
  var passwordlength = parseInt(prompt("Enter length of password. Number must be between 8-128 characters"));
} 
// Confirm user input (lowercase.uppercase,numbers and special characters.)
var confirmLowerCase = confirm("Would you like to include lower case letters?");
var confirmUpperCase = confirm("Would you like to include upper case letters?");
var confirmNumber = confirm("Would you include to use numbers?");
var confirmSpecChar = confirm("Would you like to include special characters?");

// generate password
var userPassword = "";
generatePassword();
alert("Your Password is: "+ userPassword);

//Write generated password on page
document.getElementById("password").innerHTML = userPassword;

//Generate password
var passwordGroup = "";
function generatePassword() {
  if (confirmLowerCase) {
  passwordGroup += lowerCase;
  }
  if (confirmUpperCase) {
  passwordGroup += upperCase;
  }
  if (confirmNumber) {
  passwordGroup += numbers;
  }
  if (confirmSpecChar) {
  passwordGroup += specChar;
  }
  //for loop
  for (let i = 0; i < passwordlength; i++) {
    userPassword += passwordGroup.charAt(
    Math.floor(Math.random() * passwordGroup.length)
    );
  }
  return userPassword;
}
//Copy the password to clipboard
function copyPassword(){
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0,99999);
  document.execCommand("copy");
  alert("Copied");
}