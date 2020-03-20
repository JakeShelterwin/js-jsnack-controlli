// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// dichiarazione variabili
var numero1, numero2;

// chiedo all'utente di inserire i numeri da confrontare
//siccome l'utente inserirà una stringa, la converto in un intero grazie a parseInt
numero1 = parseInt(prompt('Inserisci il primo numero'));
numero2 = parseInt(prompt('Inserisci il secondo numero'));

// inserisco le condizioni per stampare i numeri correttamente
if (numero1>numero2){
  document.getElementById('maggiore').innerHTML = 'Il numero più grande è il primo che hai inserito: ' + numero1;
} else if (numero1==numero2){
  document.getElementById('maggiore').innerHTML = 'I numeri sono identici: ' + numero1 +" "+ numero2;
} else {
  document.getElementById('maggiore').innerHTML = 'Il numero più grande è il secondo che hai inserito: ' + numero2;
}
