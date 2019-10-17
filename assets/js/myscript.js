// chiedi il numero di chilometri e eta
var chilometri = parseFloat(prompt("Quanti chilometri?"));
console.log("sono "+chilometri+" km");
var eta = parseInt(prompt ("Quanti anni hai?"));
console.log("Hai "+eta+" anni");
var prezzoB;
// calcolo del prezzo biglietto in base ai km(0.21cebt x 1km)
// console.log("Il prezzo del biglietto è €"+prezzoB);
// condizione se eta è sotto 18 anni allora -20%
if (eta>=65) {
  prezzoB = ((0.21 * chilometri) * .40);
  var decimal = prezzoB.toFixed(2);
  console.log("Il prezzo con sconto senior è €"+decimal);
}
else if(eta<=17) {
  prezzoB = ((0.21 * chilometri) * .20);
  decimal = prezzoB.toFixed(2);
  console.log("Il prezzo con sconto junior è €"+decimal);
}
else {
  prezzoB = (0.21 * chilometri);
  decimal = prezzoB.toFixed(2);
  console.log("Il prezzo del biglietto è €"+decimal);
}

// condizione se eta è soppra 65 anni allora -40%

// calcolo prezzo totale del'meta
