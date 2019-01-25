const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
	const board = [];

	for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
		const row = [];
		for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
			row.push(' ');
		}
		board.push(row);
	};
	return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];

	for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
		let row = [];

		for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
			row.push(null);
		}

		board.push(row);
	};

	let numbersOfBombsPlaced = 0;

	while (numbersOfBombsPlaced < numberOfBombs) {
		// this might place bombs on top of already existing ones;
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex =  Math.floor(Math.random() * numberOfColumns);

		board[randomRowIndex][randomColumnIndex] = 'B';
		numbersOfBombsPlaced++;
	}

	return board;
};

const printBoard = board => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
