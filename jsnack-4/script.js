//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var nomeUser = prompt("inserisci il tuo nome");
var invitati = ["marco" , "elena" , "fabio", "simone","mattia"]
var messaggio ;

var i=0;

while( i<invitati.length ){
  if(nomeUser == invitati[i]){
    messaggio = true;
  }
  i++;
}

if(messaggio == true){
  document.getElementById("enterOrNot").innerHTML= "Puoi entrare";
  console.log("puoi entrare")
} else{
  document.getElementById("enterOrNot").innerHTML = "Non puoi entrare";
  console.log("non puoi entrare")
}


