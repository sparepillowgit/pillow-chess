# Pillow Chess

A just-for-fun JS chess library riddled with suboptimal code. This was an exercise in problem solving, which meant no Googling for optimal solutions.

## Installation

```
$ npm install @sparepillowgit/pillow-chess
```

## Usage

```
const pchess = require('pillow-chess');
```

###### Create an empty board:
```
const Game = require('./index');
```

###### Place pieces using standard chess rules:
```
game.newGame({rules: 'standard'});
```

###### Move a piece:
```
game.movePiece('Nf3');
```

## ASCII & Unicode

You can generate an ASCII or Unicode output of a board state:

###### ASCII:
```
let ascii = game.printASCII();
```

###### Unicode (experimental):
```
let unicode = game.printUnicode();
```

###### Example output:
```
console.log(ascii);

>    +---+---+---+---+---+---+---+---+
>  8 | r | n | b | q | k | b | n | r |
>    +---+---+---+---+---+---+---+---+
>  7 | p | p | p | p | p | p | p | p |
>    +---+---+---+---+---+---+---+---+
>  6 |   |   |   |   |   |   |   |   |
>    +---+---+---+---+---+---+---+---+
>  5 |   |   |   |   |   |   |   |   |
>    +---+---+---+---+---+---+---+---+
>  4 |   |   |   |   |   |   |   |   |
>    +---+---+---+---+---+---+---+---+
>  3 |   |   |   |   |   |   |   |   |
>    +---+---+---+---+---+---+---+---+
>  2 | P | P | P | P | P | P | P | P |
>    +---+---+---+---+---+---+---+---+
>  1 | R | N | B | Q | K | B | N | R |
>    +---+---+---+---+---+---+---+---+
>      a   b   c   d   e   f   g   h
```