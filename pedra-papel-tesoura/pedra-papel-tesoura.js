// array com opções
const opcoes = ['pedra', 'papel', 'tesoura'];

// essa função percorre o array e retorna um valor aleatório, seria a escolha da máquina
function computerPlay() {
    let computerchoice = opcoes[Math.floor(Math.random() * opcoes.length)];
    return computerchoice
};
// contador de pontos

let playerScore = 0
let computerScore = 0


function playRound() {

    let playerSelection = 'papel'
    let computerSelection = computerPlay();

    console.log(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        return (console.log('Empate'));
    } if ((playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")) {
        console.log("Voce Ganhou");
        playerScore++;
    } else {
        console.log("Computador ganhou");
        computerScore++;
    };

};

function fiveRoundgame() {
    for (var i= 0; i <=4; i++) playRound(i);

    console.log(playerScore, computerScore);
    
    if (playerScore >= 3) {
        console.log("vc ganhou")
    } else if (computerScore >= 3) {
        console.log("vc perdeu")
    } else (console.log("ninguém chegou a 3 pontos, joguem novamente"))
    
}
fiveRoundgame(playRound,playerScore, computerScore);


