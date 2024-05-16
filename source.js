function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return prompt("Which decision you are going to make?");
}

function proccessHumanChoice(str) {
    str = str.trim();
    str = str.toLowerCase();

    if (str === "rock") {
        return 0;
    } else if (str === "paper") {
        return 1; 
    } else {
        return 2;
    }
}

function incHumanScore() {
    humanScore++;
}

function incComputerScore(){
    computerScore++;
}

let humanScore = 0;
let computerScore = 0;
function playgame() {
    const computerSelection = getComputerChoice();
    const humanSelection = proccessHumanChoice(getHumanChoice());

    function playround(human, computer) {
        const result = human - computer;

        let humanContext = "";
        let computerContext = "";

        if (human === 0) {
            humanContext =  "Rock";
        } else if (human === 1) {
            humanContext = "Paper";
        } else {
            humanContext = "Scissors";
        }

        if (computer === 0) {
            computerContext =  "Rock";
        } else if (computer === 1) {
            computerContext = "Paper";
        } else {
            computerContext = "Scissors";
        }

        if (result === 1 || result === -2) {
            console.log("You win! " + humanContext + " beats " + computerContext); 
            humanScore++;
        } else if (result === -1 || result === 2) {
            console.log("You loose! " + computerContext + " beats " + humanContext);
            computerScore++;
        } else {
            console.log("You tied. You both are: " + computerContext  );
        };
    }
    playround(humanSelection, computerSelection)
    console.log("Your score: "+ humanScore);
    console.log("Computer score: " + computerScore);
}

for (let i = 0 ; i < 5; i++) {
    playgame()
}

