/* Personalizando o body */
document.body.style = "width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center"

const grupoA = 100;
const grupoB = 200;

/* Com if e else => não é uma expessão */

/* if(grupoA > grupoB){
    let newSpan = document.createElement("span");
    newSpan.innerText = "Grupo A ganhou!"
    document.body.appendChild(newSpan);
} else {
    let newSpan = document.createElement("span");
    newSpan.innerText = "Grupo B ganhou!"
    document.body.appendChild(newSpan);
} */

/* Com operador ternário */
const winner = grupoA > grupoB ? "Grupo A ganhou!" : "Grupo B ganhou!"

let newSpan = document.createElement("span");
newSpan.innerText = winner;
document.body.appendChild(newSpan);