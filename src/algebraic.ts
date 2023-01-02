// Pillow Chess uses long algebraic notation (LAN).

function fileToInt(file: string): number {
	return file.charCodeAt(0) - 96;
}

function getMoveType(notation: string): string {
	let moveType: string;

	switch (notation.length) {
		default:
			// Length is 4
			moveType = 'standard';
	}

	return moveType;
}

module.exports = {
	parseLAN: function(notation: string): parsedNotation {
		const moveType = getMoveType(notation);

		const parsedNotation: parsedNotation = {
			from: {
				file: 'b',
				rank: 2
			},
			to: {
				file: 'b',
				rank: 3
			}
		};

		console.log(notation);
	
		return parsedNotation;
	}
}
