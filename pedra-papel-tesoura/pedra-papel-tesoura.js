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

/* A função playround executa toda a lógica de uma rodada do jogo, recebendo as escolhas do jogador e do computador, e as comparando para 
determinar o vendedor */

function playRound() {

    let playerSelection = 'papel'
    let computerSelection = computerPlay();

    console.log(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        return (console.log('Rodada empatou'));
    } if ((playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")) {
        console.log("Parabéns, você ganhou essa rodada");
        playerScore++;
    } else {
        console.log("O computador ganhou essa rodada");
        computerScore++;
    };

};

// Função que simula um jogo com 5 rodadas,  ganha quem chegar a 3 pontos.

function fiveRoundgame() {
    for (var i= 0; i <=4; i++) playRound(i);

    console.log(playerScore, computerScore);
    
    if (playerScore >= 3) {
        console.log("Você ganhou o jogo")
    } else if (computerScore >= 3) {
        console.log("Computadou ganhou o jogo")
    } else (console.log("ninguém chegou a 3 pontos, joguem novamente"))
    
}
fiveRoundgame(playRound,playerScore, computerScore);


