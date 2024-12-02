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
    ]

    }
}