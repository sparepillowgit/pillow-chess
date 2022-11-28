var pngModule = require('./png');

module.exports = {
	movePiece: function (board: Board, notation: string): Board {
        const parsedNotation = pngModule.parseNotation(board, notation);
	
		return board;
	},
};