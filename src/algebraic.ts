// Pillow Chess uses long algebraic notation (LAN).

function fileToInt(file: string): number {
	return file.charCodeAt(0) - 96;
}

module.exports = {
	parseLAN: function(notation: string): parsedNotation {
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
