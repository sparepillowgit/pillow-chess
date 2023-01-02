interface Square {
	piece?: Piece;
}

interface Board {
	squares: Record<string, Record<number, Square>>;
	moves: [string, string][];
	turn: 'white' | 'black';
}

interface parsedMove {
	file: number;
	rank: number;
}

interface parsedNotation {
	[key?: {}]: parsedMove;
}
