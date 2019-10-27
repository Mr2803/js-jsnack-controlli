
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.
/* var global = [];
var array = [];
var number;



for(var i=0; i < 6 ; i++){
  number = parseInt(prompt("inserisci un numero"));
  if(isNaN(number)){
    alert("Ti ho detto NUMERO");
    i--;
  }else{
    if (number % 2 !== 0) {
      array.push(number);
      global.push(number)
    }else{
      global.push(number);
    } 
  }
 }

  

document.getElementById("globalNumbers").innerHTML = "I numeri da te inseriti sono :"
document.getElementById("numbers").innerHTML = global;
document.getElementById("globalOdd").innerHTML = "I numeri <span>dispari</span> da te inseriti sono :" 
document.getElementById("odd").innerHTML = array; */

/* var global = [];
var array = [];
var number;

for (var i = 0; i < 6; i++) {
  number = parseInt(prompt("inserisci un numero"));
  if (isNaN(number)) {
    alert("Ti ho detto NUMERO");
    i--;
  } else {
    if (number % 2 !== 0) {
      array.push(number);
      global.push(number);
      for(var i=0; i< global.length ; i++){
        if(global % 2 ==0){
          alert("inserisci almeno un numero dispari");
          i--;
        }
        }
    } else {
      global.push(number);
    } 
  }
}

document.getElementById("globalNumbers").innerHTML = "I numeri da te inseriti sono :"
document.getElementById("numbers").innerHTML = global;
document.getElementById("globalOdd").innerHTML = "I numeri <span>dispari</span> da te inseriti sono :"
document.getElementById("odd").innerHTML = array;  */


//SOLUZIONE PIù VICINA AL RISULTATO SPERATO (UNICO VINCOLO è CHE IL PRIMO NUMERO DEVE ESSERE DISPARI)
/* var global = [];
var array = [];
var number;


for (var i = 0; i < 6; i++) {
    number = parseInt(prompt("inserisci un numero"));
   if (isNaN(number)) {
    alert("Ti ho detto NUMERO");
    i--;
  } else{
    if(number % 2 == 0){
      if(global % 2 == 0){
        alert("inserisci almeno un numero dispari");
        i--;
      } else{
        global.push(number);
      }
    } else{
      array.push(number);
      global.push(number);
    }
  }
}

document.getElementById("globalNumbers").innerHTML = "I numeri da te inseriti sono :"
document.getElementById("numbers").innerHTML = global;
document.getElementById("globalOdd").innerHTML = "I numeri <span>dispari</span> da te inseriti sono :"
document.getElementById("odd").innerHTML = array; */





var global = [];
var array = [];
var number;




for (var i = 0; i < 6; i++) {
    number = parseInt(prompt("inserisci un numero"));
   if (isNaN(number)) { //se non è un numero var number (valore inserito dall'utente)
    alert("Ti ho detto NUMERO");//dammi un alert 
    i--;//e retrocedi di una posizione
  } else{//altrimenti (quindi se number è un numero)
    if(number % 2 !== 0){//se questo numero è dispari
      array.push(number);//inseriscilo all'interno dell'array dei dispari
      global.push(number);//e inseriscilo all'interno dell'array globale
    }else{//altrimenti (quindi se questo numero è pari)
      if (global % 2 !== 0) {//se i valori all'interno dell'array global sono dispari
        global.push(number);//aggiungili al global

      } else { //altrimenti (quindi se il numero all'interno di global è pari)
        alert("inserisci almeno un numero dispari"); //rilascia un messaggio di errore e invita ad inserire almeno un numero dispari
        i--;//e retrocedi di una posizione
      }
    }
  } 
}


document.getElementById("globalNumbers").innerHTML = "I numeri da te inseriti sono :"
document.getElementById("numbers").innerHTML = global;
document.getElementById("globalOdd").innerHTML = "I numeri <span>dispari</span> da te inseriti sono :"
document.getElementById("odd").innerHTML = array; 

  
