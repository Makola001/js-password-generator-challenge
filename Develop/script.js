var characterAmountRange = document.getElementById("characterAmountRange")
var characterAmountNumber = document.getElementById("characterAmountNumber")
var includeUppercaseElement = document.getElementById("includeUppercase")
var includeSymbolsElement = document.getElementById("includeSymbols")
var includeNumbersElement = document.getElementById("includeNumbers")
var form = document.getElementById("passwordGenerator")
var form = document.getElementById("passwordGenerator")
var passwordDisplay = document.getElementById("password")

var upperCaseCharCodes = arrayFromLowToHigh(65,90)
var lowerCaseCharCodes = arrayFromLowToHigh(97,122)
var numberCodes = arrayFromLowToHigh(48,57)
var symbolCharCodes = arrayFromLowToHigh(33,47).concat(
  arrayFromLowToHigh(58,64)
  ).concat(
    arrayFromLowToHigh(91,96)
  ).concat(
    arrayFromLowToHigh(123,126)
  )

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

form.addEventListener("submit", e=> {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})



function generatePassword (characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  var charCodes = lowerCaseCharCodes
  if (includeUppercase) charCodes = charCodes.concat(upperCaseCharCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)
  if (includeNubmers) charCodes = charCodes.concat(numberCodes)

  var passwordCharacters = []
  for (var i= 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
}
return passwordCharacters.join("")

}

function arrayFromLowToHigh(low, high){
  var array = []
  for (var i = low; i <=high; i++) {
    array.push(i)
  }
  return array
}


function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}









// // Assignment code here
// var generateBtn = document.querySelector("#generate");

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//  var passwordLength = 12;
//  var password = "";

//  for (var i=0; i<= passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() * chars.length);
//   password += chars.substring(randomNumber, randomNumber +1);

//  }
//  document.querySelector("#generate").value = password;

