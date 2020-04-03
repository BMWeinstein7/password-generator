// Assignment Code
var generateBtn = document.querySelector("#generate");


// critera the user wants

var passLength = prompt("Enter the length of your password. (Minimum of 8 characters and maximum of 128 characters)");

var passAlph = confirm("Click Ok if you like to have upper case alphabets in your password ");
var passalph = confirm(" Click Ok if you like to have lower case alphabets in your password ");
var passNumb = confirm(" Click Ok if you like to have numbers in your password ");
var passSpec = confirm(" Click Ok if you like to have special characters in your password? ");

var Alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpCh = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "_", ".", "/", ":", ";", "<", ">", "=", "?", "?", "@", "[", "]", "^", "`", "~", "{", "}", "|"];

//console.log(passLength);
//console.log(passAlph);
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);