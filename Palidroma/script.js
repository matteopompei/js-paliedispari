// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let word = prompt("Inserisci una parola");
let pal = "";

// Controlliamo se la parola è un palindromo
function palCheck(pal) {
  let lettersArr = word.split("");
  let reverseArray = lettersArr.reverse();
  let reverseWord = reverseArray.join("");
  if (word.toLowerCase() == reverseWord.toLowerCase()) {
    pal = "La parola è palindroma!";
  }
  else {
    pal = "La parola <strong>NON</strong> è palindroma!";
  }
}

document.writeln("Parola inserita: " + word + "<br>");
document.writeln(palCheck(pal));