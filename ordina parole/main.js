// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// dichiarazione variabili
var parola1, parola2;

// chiedo all'utente di inserire le parole da ordinare
parola1 = prompt('Inserisci la prima parola');
parola2 = prompt('Inserisci la seconda parola');

// inserisco le condizioni per stampare le parole dalla più corta alla più lunga
if (parola1.length>parola2.length){
  document.getElementById('ordina').innerHTML = 'Ecco le parole che hai inserito dalla più corta alla più lunga: ' + parola2 + " " + parola1;
} else if (parola1.length==parola2.length){
  document.getElementById('ordina').innerHTML = 'Le parole hanno la stessa lunghezza, e sono: ' + parola1 +" "+ parola2;
} else {
  document.getElementById('ordina').innerHTML = 'Ecco le parole che hai inserito dalla più corta alla più lunga: ' + parola1 + " " + parola2;
}
