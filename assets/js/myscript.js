
var prezzB, nome, cognome, chilometri, eta;

function acquista() {
  nome = document.getElementById("nomeInput").value;
  console.log(nome);
  cognome = document.getElementById("cognomeInput").value;
  console.log(cognome);
  chilometri = document.getElementById("destInput").value;
  console.log(chilometri);
  eta = document.getElementById("etaInput").value;
  console.log(eta);
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
  console.log("il prezzo del biglieto è "+decimal);
   document.getElementById("cPrezzo").innerHTML = decimal;
   document.getElementById("cNome").innerHTML = nome;
   document.getElementById("cCognome").innerHTML = cognome;
   document.getElementById("cEta").innerHTML = eta;
   document.getElementById("cKm").innerHTML = chilometri;
}

// document.getElementById('cprezzo').innerHTML = "€"+decimal;
