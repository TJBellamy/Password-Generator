// Assignment Code
var generateBtn = document.querySelector("#generate");

 function generatePassword(){

 var userInput = window.prompt("How long should your password be?")

 var userInput = parseInt(userInput)

 if (isNaN(userInput)) {
  window.alert("Please input a valid number")
  return

 }


 if(userInput < 8 || userInput > 128) {
  window.alert("Your password length must be atleast 8 characters or at most 128 characters")
  return
}

 }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
