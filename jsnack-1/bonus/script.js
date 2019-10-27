//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var num1;
var num2;

while(isNaN(num1)){
  num1 = parseInt(prompt("inserisci un numero"));
  if(isNaN(num1)){
    alert("Numeri NON PAROLE");
  }
}

while(isNaN(num2)){
  num2 = parseInt(prompt("inserisci un numero"));
  if(isNaN(num2)){
    alert("Numeri NON PAROLE");
  }
}


if(num1 > num2){
  document.getElementById('numeromaggiore').innerHTML = "il numero maggiore è: " ;
  document.getElementById('num').innerHTML = num1;
} else if(num2 > num1){
  document.getElementById('numeromaggiore').innerHTML = "il numero maggiore è: ";
  document.getElementById('num').innerHTML = num2;
} else{
  document.getElementById('numeromaggiore').innerHTML = "i numeri sono uguali";
}


