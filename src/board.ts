interface Square {
	occupyingPieceId: number | null;
}

interface Board {
	squares: Record<string, Record<string, Square>>
}

function generateSquares(): Record<string, Record<string, Square>> {
	const squares: Record<string, Record<string, Square>> = {};
	const ranks: Record<string, Square> = {};

	// Create ranks to append to board[file]. I'm doing this here so
	// I don't have to run a nested for-loop for each file.

	['1', '2', '3', '4', '5', '6', '7', '8'].forEach(rank => {
		ranks[rank] = {occupyingPieceId: null};
	});

	['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(file => {
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
	}
};