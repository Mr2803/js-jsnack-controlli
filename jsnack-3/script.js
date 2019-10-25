


//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var somma=0;
//CICLO FOR
for (var i = 0; i < 5; i++) {
  var nums = parseInt(prompt("Inserisci un numero"));
  console.log(nums);
  somma = somma + nums;
  //OPPURE somma += nums
}
document.getElementById('somma').innerHTML = somma;
console.log(somma);

/* SOLUZIONE CON CICLO WHILE
var j = 0;
while(j<5){
  var nums = parseInt(prompt("Inserisci un numero"));
  console.log(nums)
  somma = somma + nums;
  j++;
}
document.getElementById('somma').innerHTML = somma;
console.log(somma) */


