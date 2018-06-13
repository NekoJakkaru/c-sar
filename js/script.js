// var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X',"Y","Z"];
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p,'q','r','s','t','u','v','w','x','y','z'];
var cpt = 0;
while (cpt < 26) {
    console.log(cpt);
    console.log(alpha[cpt]);
    cpt++;
}
cpt = 29;
if (cpt >26) {
    var dif = cpt - 27;
    cpt = 0 + dif;
    console.log(cpt);
    console.log(alpha[cpt]);
}

var tc = document.getElementById('toCoded');
console.log(tc);
tc.addEventListener("click", function(){
    var nText = document.getElementById('notCoded');
    console.log(nText.value);
})
