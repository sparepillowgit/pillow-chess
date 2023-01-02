var algebraicModule = require('./algebraic');
var pawnParser = require('./move_parsers/pawn_parser');

module.exports = {
	movePiece: function (board: Board, notation: string): Board {
        const parsedNotation = algebraicModule.parseLAN(notation);

		console.log(parsedNotation);
	
		return board;
	},
};