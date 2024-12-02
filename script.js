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

    setupEventListeners() {
              // Add click listeners to game squares
              for (let i = 0; i < 9; i++) {
                const square = document.getElementById(`square-${i}`);
                square.addEventListener('click', () => this.handleSquareClick(i)); // Handle click on each square
            }
    
            // Play again button listener to reset the game
            this.playAgainBtn.addEventListener('click', () => this.resetGame());
    }
    handleSquareClick(index) {
        // Check if square is already filled or if the game is not active
        const square = document.getElementById(`square-${index}`);
        if (this.board[index] !== '' || !this.gameActive) return; // Prevent marking a filled square or playing if game is over

        // Place the current player's mark on the board
        this.board[index] = this.currentPlayer;
        
        // Update the UI: set the text content to current player's mark (X or O) and add relevant CSS class
        square.textContent = this.currentPlayer;
        square.classList.add(this.currentPlayer.toLowerCase());

        // Check for win or draw after the move
        if (this.checkWin()) {
            this.handleGameEnd(false); // If there's a win, end the game (false for no draw)
            return;
        }

        if (this.checkDraw()) {
            this.handleGameEnd(true); // If there's a draw, end the game (true for draw)
            return;
        }

        // Switch to the next player
        this.switchPlayer();
    }

    switchPlayer() {
        // Toggle between players 'X' and 'O'
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateTurnDisplay(); // Update the turn display to show the next player
    }

    updateTurnDisplay() {
        // Update the UI to show the current player (X or O)
        this.turnDisplay.textContent = this.currentPlayer;
    }

    checkWin() {
        // Check if any of the winning conditions are met
        return this.winningConditions.some(condition => {
            // For each winning combination, check if all positions match the current player's mark
            return condition.every(index => {
                return this.board[index] === this.currentPlayer;
            });
        });
    }

    checkDraw() {
        // Check if all cells are filled, meaning it's a draw if no winner
        return this.board.every(cell => cell !== ''); // True if all cells are filled
    }

    handleGameEnd(isDraw) {
        // Handle the end of the game (win or draw)
        this.gameActive = false; // End the game

        if (!isDraw) {
            // Update score for the winner and save to localStorage
            if (this.currentPlayer === 'X') {
                this.scoreX++; // Increase 'X' score
                localStorage.setItem('scoreX', this.scoreX.toString()); // Save the score in localStorage
            } else {
                this.scoreO++; // Increase 'O' score
                localStorage.setItem('scoreO', this.scoreO.toString()); // Save the score in localStorage
            }
            this.updateScoreboard(); // Update the displayed scores

            // Display win message
            alert(`Player ${this.currentPlayer} Wins!`);
        } else {
            // If it's a draw, display a draw message
            alert('Game is a Draw!');
        }
    }

    
    updateScoreboard() {
        // Update the scoreboard UI with the current scores for 'X' and 'O'
        this.scoreboardX.textContent = this.scoreX;
        this.scoreboardO.textContent = this.scoreO;
    }

    resetGame() {
        // Reset the board and game state for a new game
        this.board = ['', '', '', '', '', '', '', '', '']; // Empty the board
        this.gameActive = true; // Set the game to active again

        // Clear the board UI (remove marks and classes)
        for (let i = 0; i < 9; i++) {
            const square = document.getElementById(`square-${i}`);
            square.textContent = ''; // Remove any text in the square
            square.classList.remove('x', 'o'); // Remove CSS classes for X and O
        }

        // Reset to player 'X's turn
        this.currentPlayer = 'X';
        this.updateTurnDisplay(); // Update the UI to show it's 'X's turn
    }

    
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe(); // Create a new instance of the TicTacToe game
});