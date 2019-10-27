//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/* var nomeUser = "";
var invitati = ["marco", "elena", "fabio", "simone", "mattia"]

//inserita condizione per impedire all'utente di inserire un numero
while(!isNaN(nomeUser)){
  nomeUser = prompt("inserisci il tuo nome");
  if (!isNaN(nomeUser)){
    alert("Wow il tuo nome è un numero ?")
  }
}

//una volta verificato che il valore inserito dall'utente non sia un numero controlliamo se può o meno entrare alla festa con un secondo ciclo while

//imposto una var messaggio come variabile di appoggio a cui assegno valore true se il nome è in lista (la variabile parte di base da false)
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
 */

//SOLUZIONE CON 1 CICLO WHILE CONTENUTO IN UN ALTRO
var nomeUser = "";
var invitati = ["marco", "elena", "fabio", "simone", "mattia","chiara"]


//apro un primo ciclo while dove imposto le condizione di base che il valore inserito dall'utente non deve essere un numero

while (!isNaN(nomeUser)){
//chiedo all'utente di inserire il suo nome 
 nomeUser = prompt("inserisci il tuo nome");
//faccio un primo controllo per verificare che il nome inserito non sia un numero 
 if (!isNaN(nomeUser)){
   alert("Wow il tuo nome è un numero ?")
//se abbiamo superato il primo step (non è un numero) passiamo al secondo controllo
 }else{
   //imposto la mia variabile d'appoggio messaggio (di base falsa)
   var messaggio;
   //imposto la mia var i per il mio ciclo while
   var i = 0;
//apro un ciclo while per far attraversare alla mia var i (index) il mio array
    while(i < invitati.length){
      //imposto la condizione per verificare se il nome inserito dall'utente sia o meno in lista quindi se c'è un riscontro la mia variabile d'appoggio diventa vera
      if (nomeUser == invitati[i]) {
          messaggio = true;
        }
      //imposto il mio contatore (via d'uscita)
      i++;
    }
  }
  //imposto le condizioni per il print in pagina e cioè che il messaggio deve essere ==true (risultato del secondo ciclo while) && non deve essere un numero ( la seconda condizione posso anche ometterla perchè se arriviamo a questo if di base l'utente non ha inserito un numero) altrimenti stampa il messaggio non puoi entrare
  if (messaggio == true ) {
    document.getElementById("enterOrNot").innerHTML = "Benvenuto al";
    document.getElementById("party").innerHTML = "party";
  } else {
    document.getElementById("enterOrNot").innerHTML = "Non sei invitato al";
    document.getElementById("party").innerHTML = "party";
  }
}









