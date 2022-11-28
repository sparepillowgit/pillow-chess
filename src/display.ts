function parseBoardState(board: Board, options: {format: string}): string[] {
    const lines: string[] = [];

    for (const file in board.squares) {
        for (const rank in board.squares[file]) {
            // Insert rank label.
            if (lines[parseInt(rank) - 1] === undefined) lines[parseInt(rank) - 1] = ` ${rank} | `;

            if (board.squares[file][rank].piece) {
                switch (options.format) {
                    case 'unicode':
                        lines[parseInt(rank) - 1] += board.squares[file][rank].piece?.symbol.unicode;
                        break;
                    case 'ascii':
                        lines[parseInt(rank) - 1] += board.squares[file][rank].piece?.symbol.ascii;
                        break;
                }

                // Insert file separator.
                lines[parseInt(rank) - 1] += ' | ';
            } else {
                lines[parseInt(rank) - 1] += '  | ';
            }
        }
    }

    // Insert file labels.
    lines.unshift('     a   b   c   d   e   f   g   h  ');

    // Insert rank separators.
    lines.forEach((line: string, index: number) => {
        lines.splice(((index + 1) + ((index * 1) + 1)) - 1, 0, '   +---+---+---+---+---+---+---+---+');
    });

    return lines.reverse();
}

module.exports = {
    ASCII: function (board: Board): string {
        let output: string[] = parseBoardState(board, {format: 'ascii'});

        return output.join('\n');
    },
    unicode: function (board: Board): string {
        // Unicode support is experimental. Characters don't line up correctly.

        let output: string[] = parseBoardState(board, {format: 'unicode'});

        return output.join('\n');
    }
};
