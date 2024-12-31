function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 1) {
        return "rock";
    } else if (rand == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Would you like to play rock, paper, or scissors?").toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid input, would you like to play rock, paper, or scissors?").toLowerCase();
    }
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === "rock") {
            if (computerChoice ==="paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock.")
            } else {
                humanScore++;
                console.log("You win! Rock beats Scissors.");
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats Rock.");
            } else {
                computerScore++;
                console.log("You lose! Scissors beats Paper.");
            }
        } else {
            if (computerChoice === "rock") {
                computerScore++;
                console.log("You lose! Rock beats Scissors.");
            } else {
                humanScore++;
                console.log("You win! Scissors beats Rock.");
            }
        }
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congrats, you won!")
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost!")
    } else {
        console.log("It's a tie!")
    }
}