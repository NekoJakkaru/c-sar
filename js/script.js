var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var shift = parseInt(prompt("Le décalage dans l'alphabet."));
console.log(shift);

var word = prompt("Le mot à chiffrer.");
console.log(word);

var newWord = "";

for (var i = 0; i < word.length; i++){

  var newLetter = alpha.indexOf(word[i]);
  var newLetterIndex = newLetter + shift;
  newLetterIndex %= 26;
  var newLetterScript =  alpha[newLetterIndex];
  newWord += newLetterScript;
}
console.log(word, newWord);
