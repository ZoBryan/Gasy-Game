// I - Création des trous et assignation dans un tableau
// Partie supérieure
const divSup = document.querySelector(".sup");
divSup.innerHTML = "";
const up = [];
for (let i = 0; i < 12; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  divSup.appendChild(cell);
  up.push(cell);
}
// Partie inférieure
const divInf = document.querySelector(".inf");
divInf.innerHTML = "";
const down = [];
for (let i = 0; i < 12; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  divInf.appendChild(cell);
  down.push(cell);
}

// II - Création des pions 
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  for (let i = 0; i < 7; i++) {
    if((i == 3) || (i == 4)){
      cell.innerHTML += '<div class="ballIni"></div>'; // 2 pions initials
    }
    else{
      cell.innerHTML += '<div class="ball" style="display: none;"></div>'; // pions pouvant y être ajouté
    }
  }
});