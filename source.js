const resultPar = document.querySelector(".result");
const humanPar = document.querySelector(".human-decision");
const computerSelectionPar = document.querySelector(".computer-decision");

let computerSelection = null;
let humanSelection = null;

const decisionCon = document.querySelector(".decision-container");

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function proccessChoice(number) {
    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playground(num1, num2) {
    let result = num1 - num2;
    
    computerSelectionPar.textContent = proccessChoice(computerSelection); 
    humanPar.textContent = proccessChoice(humanSelection);

    if (result === 1 || result === -2) {
        resultPar.textContent = "You win!"; 
    } else if (result === -1 || result === 2) {
        resultPar.textContent = "You loose!"
    } else {
        resultPar.textContent = "Tied game!"
    }
}

function playgame() {
    resultPar.textContent = "";
    computerSelectionPar.textContent = "";
    humanPar.textContent = "";

    computerSelection = getComputerChoice();    

    decisionCon.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "rock-btn": 
                humanSelection = 0;
                break;
            case "paper-btn":
                humanSelection = 1;
                break;
            case "scissors-btn":
                humanSelection = 2;
                break;
            default:
                break;
        } 
        playground(humanSelection, computerSelection);
    })
}

const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", playgame);


