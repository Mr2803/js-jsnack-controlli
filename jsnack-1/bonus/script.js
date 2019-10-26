//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.



var num1 = parseInt(prompt("inserisci un numero"));
var num2 = parseInt(prompt("inserisci un secondo numero"));

if(num1 > num2){
  document.getElementById('numeromaggiore').innerHTML = "il numero maggiore è: " + num1;
} else if(num2 > num1){
  document.getElementById('numeromaggiore').innerHTML = "il numero maggiore è: " + num2;
} else{
  document.getElementById('numeromaggiore').innerHTML = "i numeri sono uguali";
}


