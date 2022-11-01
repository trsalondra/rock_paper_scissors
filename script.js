function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return 'Tie!'
            } else if (computerSelection === 'paper') {
                return 'You lose! Paper beats rock!'
            } else {
                return 'You win! Rock beats scissors!'
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                return 'You win! Paper beats rock!'
            } else if (computerSelection === 'paper') {
                return 'Tie!'
            } else {
                return 'You lose! Scissors beat paper!'
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                return 'You lose! Rock beats scissors!'
            } else if (computerSelection === 'paper') {
                return 'You win! Scissors beat paper!'
            } else {
                return 'Tie!'
            }
            break;
        default:
            return 'Invalid Input :['
    }

}

let playerSelection = "rock";
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let pick = Math.floor(Math.random() * 3) // the floor of a number (greater than of equal to zero and less than 1) times 3
    return choices[pick] // selects random element from the array
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let ties = 0

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper or Scissors?')
        computerSelection = getComputerChoice()

        let result = playRound(playerSelection.toLowerCase(), computerSelection);

        console.log(`Round ${i + 1}: ${result}`)

        if (result.includes('win')) {
            playerScore++
        } else if (result.includes('lose')) {
            computerScore++
        } else {
            ties++
        }
    }

    if (playerScore > computerScore) {
        console.log('Congratulations! You WIN!')
    } else if (computerScore > playerScore) {
        console.log('Unfortunately, you LOSE.')
    } else {
        console.log('Boring, it was a TIE.')
    }
}

game()
// 
