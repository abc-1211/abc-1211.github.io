// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialBtn = document.querySelector("#special");
var wordBtn = document.querySelector("#words");
var upperBtn = document.querySelector("#upper");
var charactersInput = document.querySelector("#characters");


var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var num = [1,2,3,4,5,6,7,8,9];
var word = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = word.map(function(x){return x.toUpperCase()});
var type;

window.wordUse = 0;
window.specialUse = 0;
window.upperUse = 0;
// Write password to the #password input

wordBtn.addEventListener('change', function(){
  if(this.checked){
    window.wordUse = 1;
  } else {
    window.wordUse = 0;
  }
});

specialBtn.addEventListener('change', function(){
  if(this.checked){
    window.specialUse = 1;
  } else {
    window.specialUse = 0;
  }
});

upperBtn.addEventListener("change", function(){
  if(this.checked){
    window.upperUse = 1;
  } else {
    window.upperUse = 0;
  }
});

function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = window.password;

}

function generatePassword(){
  if ((window.wordUse === 1)&&(window.specialUse === 1)&&(window.upperUse === 1)){
    type = num.concat(special, word, upper);
    window.type = type;
    formPassword();
  } else if ((window.wordUse === 0)&&(window.specialUse === 1)&&(window.upperUse === 0)){
    type = num.concat(special);
    window.type = type;
    formPassword();
  } else if ((window.wordUse === 1)&&(window.specialUse === 0)&&(window.upperUse === 0)){
    type = num.concat(word);
    window.type = type;
    formPassword();
  } else if ((window.wordUse === 0)&&(window.specialUse === 0)&&(window.upperUse === 1)){
    type = num.concat(upper);
    window.type = type;
    formPassword();
  } else if ((window.wordUse === 1)&&(window.specialUse === 1)&&(window.upperUse === 0)){
    type = num.concat(word, special);
    window.type = type;
    formPassword();
  } else if ((window.wordUse === 1)&&(window.specialUse === 0)&&(window.upperUse === 1)){
    type = num.concat(word, upper);
    window.type = type;
    formPassword();
  } else if ((window.wordUse === 0)&&(window.specialUse === 1)&&(window.upperUse === 1)){
    type = num.concat(special, upper);
    window.type = type;
    formPassword();
  } else{
    type = num;
    window.type = type;
    formPassword();
  }
}

function formPassword(){
  var ps = [];
  for (var i = 0; i < window.characters; i++){
    var key = window.type[Math.floor(Math.random() * window.type.length)];
    ps.push(key);
  }
  var password = ps.join("");  
  window.password = password;
  writePassword();
}

function verify(){
  var characters;
  characters = charactersInput.value.trim();
  if ((characters < 8)||(characters >128)){
    alert("Characters can only be within 8 - 128");
  } else {
    window.characters = characters;
    generatePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", verify);