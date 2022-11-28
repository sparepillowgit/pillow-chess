var boardModule = require('./board');
var pieceModule = require('./piece');
var displayModule = require('./display');

module.exports = class Game {
    public constructor(private board: Board = boardModule.clearBoard()) {}

    // Clear the board.
    public clearBoard(): void {
        this.board = boardModule.clearBoard();
    }

    // Create a new game.
    public newGame(settings: {rules: string}): void {
        this.board = boardModule.newGame(this.board, settings);
    }

    // Print the board to the console in ASCII format.
    public printASCII(): string {
        return displayModule.ASCII(this.board);
    }

    // Print the board to the console in Unicode format.
    public printUnicode(): string {
        return displayModule.unicode(this.board);
    }

    // Move a piece.
    public movePiece(notation: string): void {
        this.board = pieceModule.movePiece(this.board, notation);
    }
}