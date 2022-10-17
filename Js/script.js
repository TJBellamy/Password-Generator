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
 
 var userWantsNumbers = window.confirm("would you like to add numbers to your password")
 var userWantsSymbols = window.confirm("would you like to add Symbols to your password")
 var userWantsUppercase = window.confirm("would you like to add Uppercase letters to your password")
 var userWantsLowercase = window.confirm("would you like to add Lowercase letters to your password")

 var numberList = ["0","1","2","3","4","5","6","7","8","9"]
 var symbolList = ["!","@","#","$","&","*"]
 var lowercaseList =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var upercaseList =["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

 var charactersList = []
 console.log(charactersList)
 }

 if(userWantsNumbers === true) {
  charactersList.push(numberList)
 }

 if (userWantsSymbols === true){
  charactersList.push(symbolList)
 }

  if (userWantsLowercase === true){
  charactersList.push(lowercaseList)
}

if (userWantsUppercase === true){
  charactersList.push(upercaseList)


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
