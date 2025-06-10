(() => {
    // Set the starting player's turn
    let playerXTurn = true;

    // get the reference of the element 'turn' to display the player's turn either X or O
    let turn = document.querySelector('.turn');
    turn.textContent = playerXTurn ? 'Turn: Player X' : 'Turn: Player O';

    // populate the gameGrid
    let gameGrid = document.querySelector('.gameGrid');

    // create 9 buttons and insert them to the gameGrid div block
    for (let i = 0; i < 9; i++) {

        // create a button
        let cell = document.createElement('button');

        // set the classname of the button to cell
        cell.classList.add('cell');

        // attach event listener for the button to become clickable
        cell.addEventListener('click', () => {

            // check if the cell already has been clicked and has a content
            // if yes, do not allow the function to continue

            // also, if the winner is already calculated, do not allow the function to continue.
            if (cell.textContent != '' || calculateWinner()) {
                return;
            }

            // based on the turn of the player, set the content of the button when clicked accordingly (X or O)
            if (playerXTurn) {
                cell.textContent = 'X';
            } else {
                cell.textContent = 'O';
            }

            // flip the turn for the next player
            playerXTurn = !playerXTurn;
            turn.textContent = playerXTurn ? 'Turn: Player X' : 'Turn: Player O';

            // get the reference of the result div
            let result = document.getElementById('result');

            // set the content of the result div to the winner message if calcualte winner does not return false.
            result.textContent = calculateWinner() ? `Player ${calculateWinner()} Wins!` : '';
        });

        // insert the cell to the gameGrid
        gameGrid.appendChild(cell);
    }
})();

function calculateWinner() {
    // get the reference of the gameGrid
    let gameGrid = document.querySelector('.gameGrid');

    // initialize a cells array to store all the current symbols on the buttons
    let cells = [];

    // loop over each button and get the text and store it in the cells array in that particular button's index
    for (let i = 0; i < 9; i++) {
        cells[i] = gameGrid.children[i].textContent;
    }

    // list all the winning possible moves
    let winningMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // loop over all the possible winning moves
    for (let i = 0; i < winningMoves.length; i++) {

        // for each winning move, destructure the values to the variables
        // a, b, c
        let [a, b, c] = winningMoves[i];

        // if any of the symbol either X or O managed to be on the winning moves indexes a, b, c, then we have a winner, return the winner
        if (cells[a] != '' && cells[a] === cells[b] && cells[b] === cells[c]) {
            return cells[a];
        }
    }

    // else we do not yet have any winner, allow the game to continue.
    return false;
}

function restart() {
    // get the reference of the gameGrid div block
    let gameGrid = document.querySelector('.gameGrid');

    // loop over each of the cells and reset their textContent to empty string
    for (let i = 0; i < 9; i++) {
        gameGrid.children[i].textContent = '';
    }

    // get the result block reference
    let result = document.getElementById('result');

    // reset it to the empty string, for the game to restart.
    result.textContent = '';
}