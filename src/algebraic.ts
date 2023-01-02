function parseFile(file: string): number {
	return file.charCodeAt(0) - 96;
}

module.exports = {
	parseNotation: function(board: Board, notation: string): parsedNotation {
		const parsedNotation: parsedNotation = {
			from: {
				file: parseFile('b'),
				rank: 2
			},
			to: {
				file: parseFile('b'),
				rank: 3
			}
		};
	
		return parsedNotation;
	}
}
