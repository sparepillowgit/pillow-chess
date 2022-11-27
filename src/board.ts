interface Square {
	piece?: Piece;
}

interface Board {
	squares: Record<string, Record<number, Square>>
}

function generateSquares(): Record<string, Record<number, Square>> {
	const squares: Record<string, Record<number, Square>> = {};

	['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach((file: string) => {
		const ranks: Record<number, Square> = {};

		[1, 2, 3, 4, 5, 6, 7, 8].forEach((rank: number) => {
			ranks[rank] = {};
		});

		squares[file] = ranks;
	});

	return squares;
}

module.exports = {
	create: function (): Board {
		const board: Board = {
			squares: generateSquares()
		}

		return board;
	},
	newGame: function (board: Board, options: {rules: string}): Board {
		// Import rules file.
		const rules = require(`./rules/${options.rules}`);

		// Clear the board.
		board.squares = generateSquares();

		// Check sides.
		for (const color in rules.pieces) {

			// Check piece types.
			for (const piece in rules.pieces[color]) {

				// Check piece positions.
				rules.pieces[color][piece].positions.forEach((position: {file: string, rank: number}) => {
					board.squares[position.file][position.rank].piece = {
						id: 1,
						type: piece,
						value: rules.pieces[color][piece].value,
						color: color,
					}

					console.log(`Placed ${color} ${piece} on ${position.file}${position.rank}.`);
				});
			}
		}

		return board;
	}
};