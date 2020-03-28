// Variables  
var passwordlength = 0;
var confirmLowerCase = false;
var confirmUpperCase = false;
var confirmNumber = false;
var confirmSpecChar = false;

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

function collectUserPasswordChoice(){
  //Password Length
 passwordlength = parseInt(prompt("Enter length of password. Number must be between 8-128 characters"));

//Must input a number
while (isNaN(passwordlength)) {
   passwordlength = parseInt(prompt("This is not a number. Please enter a number between 8 - 128."));
} 
//Password stipulations
while (passwordlength < 8 || passwordlength > 128){
   passwordlength = parseInt(prompt("Enter length of password. Number must be between 8-128 characters"));
} 
// Confirm user input (lowercase.uppercase,numbers and special characters.)
 confirmLowerCase = confirm("Would you like to include lower case letters?");
 confirmUpperCase = confirm("Would you like to include upper case letters?");
 confirmNumber = confirm("Would you include to use numbers?");
 confirmSpecChar = confirm("Would you like to include special characters?");

// generate password
var newPassword = generatePassword();
console.log('newPassword: ' + newPassword);
//Write generated password on page
document.getElementById("password").innerHTML = newPassword;
}


//Generate password

function generatePassword() {
  var passwordGroup = "";

  for (let i = 0; i < passwordlength; i++) {
    if (confirmLowerCase && passwordGroup.length < passwordlength) {
      passwordGroup += getRandom(lowerCase);
      }
      if (confirmUpperCase && passwordGroup.length < passwordlength) {
      passwordGroup += getRandom(upperCase);
      }
      if (confirmNumber && passwordGroup.length < passwordlength) {
      passwordGroup += getRandom(numbers);
      }
      if (confirmSpecChar && passwordGroup.length < passwordlength) {
      passwordGroup += getRandom(specChar);
      }
  }
  return passwordGroup;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Copy the password to clipboard
function copyPassword(){
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0,99999);
  document.execCommand("copy");
  alert("Copied");
}


var btnGenerate = document.querySelector('#generate');
btnGenerate.addEventListener('click', collectUserPasswordChoice)