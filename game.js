function findWinner(playerChoice, computerChoice) {
    if ((playerChoice === 'Rock' && computerChoice === 'Paper') || (playerChoice === 'Paper' && computerChoice === 'Scissor') || (playerChoice === 'Scissor' && computerChoice === 'Rock')) {
        return 'Computer Wins!';
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissor') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissor' && computerChoice === 'Paper')) {
        return 'Player Wins!';
    } else {
        return 'Its a Tie!';
    }
}

function game(event) {
    let playerChoice = event.target.textContent;

    let playerChoiceElement = document.getElementById('playerChoice');
    playerChoiceElement.textContent = `Player's Choice: ${playerChoice}`;

    // generate the computer's choice
    let choices = ['Rock', 'Paper', 'Scissor'];

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let computerChoiceElement = document.getElementById('computerChoice');

    computerChoiceElement.textContent = `Computer's Choice: ${computerChoice}`;;

    // game logic
    /*
        Player  Computer    
        Rock    Paper   
        Paper   Scissor
        Scissor Rock
    */

    let result = document.querySelector('.result');
    result.textContent = findWinner(playerChoice, computerChoice);
}