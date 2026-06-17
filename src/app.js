//write your code here
const opciones = ["rock", "paper", "scissors", "lizard", "spock"]

const jugar = (usuarioElec) => {
    const opciones = ["rock", "paper", "scissors", "lizard", "spock"];

    let computerElec = opciones[Math.floor(Math.random() * opciones.length)];

    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["rock", "scissors"]
    };

    if (usuarioElec === computerElec) {
        return "Empate :/";
    }
    if (rules[usuarioElec].includes(computerElec)) {
        return "Has Ganado!!";
    }
    return "Perdiste :(";
};

console.log(jugar("rock"));