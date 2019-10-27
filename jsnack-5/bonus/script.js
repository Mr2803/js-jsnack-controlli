
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.
var global = [];
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
document.getElementById("odd").innerHTML = array;
