// Pillow Chess uses a variation of long algebraic notation to meet UCI standards.

function fileToInt(file: string): number {
	return file.charCodeAt(0) - 96;
}

module.exports = {
	parseLongUCI: function(notation: string): parsedNotation {
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
	
		return parsedNotation;
	}
}
