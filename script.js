class TicTakToe {
    constructor() {
    // this initializes the games stats
    this.currentPlayer = 'x';//sets the first player to 'x'
    this.board = ['', '', '', '', '', '', '', '', ''];// empty 3x3 board 
    this.gameActive = true; //sets the game as active initially 


    //the winning combinations
    this.winningConditions = [
        [0, 1, 2],//top row
        [3, 4, 5],//middle row
        [6, 7, 8],//bottom row
        [0, 3, 6],//let column
        [1, 4, 7],//middle column
        [2, 5, 8],//right column
        [0, 4, 8],//diagonal top left to middle right
        [2, 4, 6],//diagonal top right to bottom left
    ];

    // Get DOM elements for UI updates
    this.turnDisplay = document.getElementById('turn'); // Display the current player's turn
    this.scoreboardX = document.getElementById('scoreboard-x'); // Display the score of 'X'
    this.scoreboardO = document.getElementById('scoreboard-o'); // Display the score of 'O'
    this.playAgainBtn = document.getElementById('button-play-again'); // Button to reset the game
    this.gameBoard = document.getElementById('game-board'); // The game board

            // Initial setup for UI updates
            this.updateTurnDisplay(); // Update the turn display to show the first player ('X')
            this.updateScoreboard(); // Update the scoreboard to show current scores
            this.setupEventListeners(); // Set up event listeners for user interactions
    }

    
}