//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


//imposto le mie variabili
var parola1 = "";
var parola2 = "";

var output1 = document.getElementById('parolaFirst');
var output2 = document.getElementById('parolaSecond');


//ciclo while per forzare l'utente ad inserire in parola1 una parola e non un numero/spazio vuoto
while(!isNaN(parola1)){
  parola1 = prompt("inserisci una parola");
  if(!isNaN(parola1)){
    alert("Ti ho detto PAROLA")
  }
}

//ciclo while per forzare l'utente ad inserire in parola2 una parola e non un numero/spazio vuoto
while(!isNaN(parola2)){
  parola2 = prompt("inserisci una parola");
  if(!isNaN(parola2)){
    alert("Ti ho detto PAROLA")
  }
}

//condizioni per stampare in pagina prima parola più breve
if (parola1.length > parola2.length){
  output1.innerHTML = "la parola più corta è: ";
  document.getElementById('first').innerHTML = parola2;
  output2.innerHTML = "la parola più lunga è: ";
  document.getElementById('second').innerHTML = parola1;

} else if(parola1.length < parola2.length){
  output1.innerHTML = "la parola più corta è: "
  document.getElementById('first').innerHTML = parola1;
  output2.innerHTML = "la parola più lunga è: ";
  document.getElementById('second').innerHTML = parola2
} else{
  document.getElementById('idem').innerHTML = "le parole hanno la stessa lunghezza " ;
}


