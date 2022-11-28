function parseNotation(notation: string): parsedNotation {
    const parsedNotation: parsedNotation = {};

    return parsedNotation;
}

module.exports = {
	movePiece: function (board: Board, notation: string): Board {
        const parsedNotation = parseNotation(notation);

        console.log('parsedNotation');
	
		return board;
	},
};