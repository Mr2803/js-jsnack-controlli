//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var somma=0;
//CICLO FOR
for (var i = 0; i < 5; i++) {
  //chiedo di inserire un numero
  var nums = parseInt(prompt("Inserisci un numero"));
  //condizione all'interno del ciclo per obbligare ad inserire un numero
  if(isNaN(nums)){
    alert("Ti ho detto NUMERO");
    //condizione all'interno dell'if per far si che la mia i(index) retroceda di una posizione se il valore inserito non è un numero
    i--;
  } else{
    console.log(nums);
    somma = somma + nums;
    //OPPURE somma += nums
  }
}
document.getElementById('somma').innerHTML = somma;
console.log(somma);

/* SOLUZIONE CON CICLO WHILE
var j = 0;
while(j<5){
  var nums = parseInt(prompt("Inserisci un numero"));
  console.log(nums)
  if (isNaN(nums)){
    alert("Ti ho detto NUMERO");
    //condizione all'interno dell'if per far si che la mia j(index) retroceda di una posizione se il valore inserito non è un numero
    j--;
  }else{
    console.log(nums);
    somma = somma + nums;
    //OPPURE somma += nums
  }
  somma = somma + nums;
  j++;
}
document.getElementById('somma').innerHTML = somma;
console.log(somma) */


