interface Square {
	piece?: Piece;
}

interface Board {
	squares: Record<string, Record<number, Square>>;
	moves: [string, string][];
	turn: 'white' | 'black';
}

interface parsedMove {
	file: string;
	rank: rank;
}

interface parsedNotation {
	[key?: string]: parsedMove;
}
