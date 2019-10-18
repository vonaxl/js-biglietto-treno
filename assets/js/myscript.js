// chiedi il numero di chilometri e eta
var nome = prompt("Come ti chiami?");
document.getElementById('cnome').innerHTML = nome;
var chilometri = parseFloat(prompt("Quanti chilometri?"));
var eta = parseInt(prompt ("Quanti anni hai?"));
var prezzoB;
// calcolo del prezzo biglietto in base ai km(0.21cebt x 1km)
// condizione se eta è soppra 65 anni allora -40%
if (eta>65) {
  prezzoB = ((0.21 * chilometri) * .60);
}
// condizione se eta è sotto 18 anni allora -20%
else if(eta<=17) {
  prezzoB = ((0.21 * chilometri) * .80);
}
// se no allora prezzo intero
else {
  prezzoB = (0.21 * chilometri);
}
var decimal = prezzoB.toFixed(2);
document.getElementById('cprezzo').innerHTML = "€"+decimal;
