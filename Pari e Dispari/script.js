// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo di scegliere pari o dispari e poi un numero da 1 a 5
// prompt("PARI o DISPARI?");
// prompt("Scegli un numero da 1 a 5!");

// Generiamo un numero random da 1 a 5 per il computer
// E inseriamoloin una funzione
function nRandom() {
  return Math.floor(Math.random() * 5) +1;
}
let nCPU = nRandom(); // Registriamo in memoria il numero assegnandolo ad una variabile


document.writeln(nCPU);