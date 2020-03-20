//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// dichiarazione variabili
var numero, somma;

// chiedo all'utente di inserire 5 numeri, usi parseInt perché l'utente inserisce una stringa
numero = parseInt(prompt('Inserisci il primo numero'));
// inizializzo la variabile "somma" con il valore inserito dall'utente
somma= numero;
numero = parseInt(prompt('Inserisci il secondo numero'));
// di qui in avanti somma diventa uguale al suo precedente valore sommato al nuovo valore inserito dall'utente
somma= somma+numero;
numero = parseInt(prompt('Inserisci il terzo numero'));
somma= somma+numero;
numero = parseInt(prompt('Inserisci il quarto numero'));
somma= somma+numero;
numero = parseInt(prompt('Inserisci il quinto numero'));
somma= somma+numero;

// stampo la somma dei numeri inseriti
document.getElementById('somma').innerHTML = 'La somma dei numeri che hai inserito è: ' + somma;
