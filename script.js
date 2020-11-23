const body = document.querySelector('body');
//create three buttons and a div to contain them
const buttons = document.createElement('div');
buttons.classList.add('buttons');

const btnRock = document.createElement('button');
btnRock.textContent = "Rock";

const btnPaper = document.createElement('button');
btnPaper.textContent = "Paper";

const btnScissors = document.createElement('button');
btnScissors.textContent = "Scissors";

//append each button to buttons container
buttons.appendChild(btnRock);
buttons.appendChild(btnPaper);
buttons.appendChild(btnScissors);

//append buttons div to the document
body.appendChild(buttons);

//create another div to display result of the round and overall score
const scoreboard = document.createElement('div');

body.appendChild(scoreboard);

let playerScore=0;
let computerScore = 0;

function computerPlay(){
    const randNum = Math.floor(Math.random()*3);
    if (randNum === 0){
        return "rock";
    }else if (randNum === 1) {
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let score ="";
    
    switch(playerSelection){
        case "rock":{
            if (computerSelection === "rock") {
                score = "tie";
            }else if (computerSelection ==="paper"){
                score = "lost";
            }else if (computerSelection === "scissors"){
                score = "win";
            }
            break;
        }
        case "paper":{
            if (computerSelection === "rock") {
                score = "win";
            }else if (computerSelection ==="paper"){
                score = "tie";
            }else if (computerSelection === "scissors"){
                score = "lost";
            }
            break;
        }
        case "scissors":{
            if (computerSelection === "rock") {
                score = "lost";
            }else if (computerSelection ==="paper"){
                score = "win";
            }else if (computerSelection === "scissors"){
                score = "tie";
            }
            break;
        }
    }

    scoreboard.textContent = `You selected ${playerSelection} and the computer rolled ${computerSelection}. \n`;

    if (score === "win"){
        scoreboard.textContent += `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }else if (score === "lost"){
        scoreboard.textContent += `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }else if (score === "tie"){
        scoreboard.textContent += "It's a tie!" ;
    }else {
        scoreboard.textContent += "Something went wrong with the score calculation.";
    }
    scoreboard.textContent += `\nPlayer:${playerScore} - Computer:${computerScore}`;
    return score;
}

function play(e){
    if (playerScore < 5 & computerScore < 5){
        playRound(this.textContent, computerPlay());
    }else if (playerScore === 5){
        scoreboard.textContent = `Congrats you won ${playerScore} to ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }else if (computerScore === 5){
        scoreboard.textContent = `Sorry you lost ${playerScore} to ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }else{
        scoreboard.textContent = 'Whoops something went wrong!';
    }
    
}

buttons.childNodes.forEach(child => child.addEventListener('click', play));