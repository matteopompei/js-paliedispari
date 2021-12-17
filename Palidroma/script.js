// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let word = prompt("Inserisci una parola");

// Controlliamo se la parola è un palindromo
function palCheck(wordChecked) {
  let lettersArr = wordChecked.split("");
  let reverseArray = lettersArr.reverse();
  let reverseWord = reverseArray.join("");
  if (wordChecked.toLowerCase() == reverseWord.toLowerCase()) {
    return "La parola è palindroma!";
  }
  else {
    return "La parola <strong>NON</strong> è palindroma!";
  }
}

document.writeln("Parola inserita: " + word + "<br>");
document.writeln(palCheck(word));