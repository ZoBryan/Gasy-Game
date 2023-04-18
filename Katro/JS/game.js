// Game start
const h2 = document.querySelector("h2");
const cellInf = document.querySelectorAll(".inf .cell");
let clickedCell = null;
cellInf.forEach((cell, index) => {
    cell.addEventListener("click", function clickHandler() { // Séléction du trou de départ
        if (clickedCell === null) {
            clickedCell = index;
            // choix du sens de la partie
            cell.style.boxShadow = "1px 1px 20px aqua inset";
            if (index > 0) {
                const prevCell = down[index - 1];
                prevCell.style.boxShadow = "1px 1px 20px red inset";
            }
            if (index < cells.length - 1) {
                const nextCell = down[index + 1];
                nextCell.style.boxShadow = "1px 1px 20px red inset";
            }
            h2.textContent = " Veuillez sélectionner le sens de la partie ";
        } else if (clickedCell === index) {
            clickedCell = null;
            h2.textContent = " C'est parti! ";
            cell.forEach((cell) => {
                cell.style.boxShadow = "1px 1px 20px aqua inset";
            });
        }
    });
});

