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
scoreboard.classList.add('scoreboard');

const para1 = document.createElement('div');
para1.classList.add('score');
const para2 = document.createElement('div');
const para3 = document.createElement('div');
const para4 = document.createElement('div');

scoreboard.appendChild(para1);
scoreboard.appendChild(para2);
scoreboard.appendChild(para3);
scoreboard.appendChild(para4);
body.appendChild(scoreboard);

let playerScore=0;
let computerScore = 0;
let roundCount = 0;

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
    roundCount++;
    para1.textContent = `Round: ${roundCount}`;
    
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

    para2.textContent = `You selected ${playerSelection} and the computer rolled ${computerSelection}. \n`;

    if (score === "win"){
        para3.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
    }else if (score === "lost"){
        para3.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    }else if (score === "tie"){
        para3.textContent = "It's a tie!" ;
    }else {
        para3.textContent = "Something went wrong with the score calculation.";
    }

    para4.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    checkGameDone(playerScore, computerScore);
}

function checkGameDone(){
    if (playerScore === 5) {
        para1.textContent = 'Congrats you won the round. Select Rock Paper or Scissors to begin a new round.';
        playerScore = 0;
        computerScore = 0;
        roundCount =0;
    }
    if (computerScore === 5) {
        para1.textContent = 'Sorry, you lost. Select Rock Paper or Scissors to begin a new round';
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
    }
}

function play(e){
    playRound(this.textContent, computerPlay());
    
}

buttons.childNodes.forEach(child => child.addEventListener('click', play));