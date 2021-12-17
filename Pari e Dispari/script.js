// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Chiedo di scegliere pari o dispari e poi un numero da 1 a 5
let PD = prompt("PARI o DISPARI?");

// Controlla se sa scrivere
if (PD.toLowerCase() == "pari" || PD.toLowerCase() == "dispari") {
  let nUser = parseInt(prompt("Scegli un numero da 1 a 5!"));

  // Controllo se sono stati inseriti dei numeri nel rage richiesto
  if ((nUser > 5) || (nUser < 1)) {
    do {
      alert("Hai inserito un numero non valido!");
      nUser = parseInt(prompt("Scegli un numero da 1 a 5!"));
    }
    while ((nUser > 5) || (nUser < 1));
  }

  // Generiamo un numero random da 1 a 5 per il computer
  // E inseriamolo in una funzione
  function nRandom() {
    return parseInt(Math.floor(Math.random() * 5) +1);
  }
  let nCPU = nRandom(); // Registriamo in memoria il numero assegnandolo ad una variabile

  sum = nUser + nCPU; // Sommiamo le due variabili con i numeri

  document.writeln("Hai scelto <strong>" + PD.toLowerCase() + "</strong><br>");
  document.writeln("Il tuo numero: <strong>" + nUser + "</strong><br>");
  document.writeln("Il numero del computer: <strong>" + nCPU + "</strong><br>");
  document.writeln("La somma è <strong>" + sum + "</strong>, ");

  // Controlliamo se la somma delle due variabili è un numero pari o un numero dispari
  function pdCheck() {
    if (sum % 2 != 0) {
      sum = "dispari";
    }
    else {
      sum = "pari";
    }
    return sum;
  }

  let sumCheck = pdCheck(); // Richiamiamo la funzione e assegnamola ad una variabile per tenerla in memoria
  document.writeln("è un numero <strong>" + sumCheck + "</strong><br>");

  // Dichiariamo chi ha vinto
  if (PD.toLowerCase() == sumCheck) {
    document.writeln("<div class=\"win\">Hai vinto, sei un campione!</div>");
  }
  else {
    document.writeln("<div class=\"lose\">Il computer ha vinto, sei un perdente!</div>");
  }
}
else {
  alert("Impara a scrivere pagliaccio!");
  location.reload();
}