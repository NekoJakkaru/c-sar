// var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X',"Y","Z"];
// var key = document.getElementById('key');
// var keyV = key.value;
// console.log(keyV);
//
// // pour parcourir alpha et renvoyer la lettre selon l'index
// var cpt = 0;
// while (cpt < 26) {
//     console.log(cpt);
//     console.log(alpha[cpt]);
//     cpt + 3;
//     cpt++;
// }
//
// // pour faire boucler le tableau qui renvoie selon l'index
// if (cpt >26) {
//     var dif = cpt - 27;
//     cpt = 0 + dif;
//     console.log(cpt);
//     console.log(alpha[cpt]);
// }
//
// // pour récupérer le texte qui n'est pas codé
// var tc = document.getElementById('toCoded');
// console.log(tc);
// tc.addEventListener("click", function(){
//     var nText = document.getElementById('notCoded');
//     console.log(nText.value);
// })

var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var shift = parseInt(prompt("Le décalage dans l'alphabet."));
console.log(shift);

var word = prompt("Le mot à chiffrer.");
console.log(word);

var newWord = "";

for (var i = 0; i < shift; i++) {
  var numLetter = word.indexOf(word[i]);
  console.log(numLetter);
  var numNewLetter = numLetter+shift;
  console.log(numNewLetter);
}
