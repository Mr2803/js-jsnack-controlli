//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = "";
var parola2 = "";

var output1 = document.getElementById('parolaFirst');
var output2 = document.getElementById('parolaSecond');

while(!isNaN(parola1)){
  parola1 = prompt("inserisci una parola");
  if(!isNaN(parola1)){
    alert("Ti ho detto PAROLA")
  }
}
while(!isNaN(parola2)){
  parola2 = prompt("inserisci una parola");
  if(!isNaN(parola2)){
    alert("Ti ho detto PAROLA")
  }
}

if (parola1.length > parola2.length){
  output1.innerHTML = "la parola più corta è: " + parola2;
  output2.innerHTML = "la parola più lunga è: " + parola1;

} else if(parola1.length < parola2.length){
  output1.innerHTML = "la parola più corta è: " + parola1;
  output2.innerHTML = "la parola più lunga è: " + parola2;
} else{
  document.getElementById('idem').innerHTML = "le parole hanno la stessa lunghezza " ;
}


