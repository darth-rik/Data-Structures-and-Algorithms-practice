function sudoku(matrix) {
	if (solveSudoku(matrix) === true) {
		return matrix;
	}
	return "No solution found";
}

function solveSudoku(matrix) {
	var checkSpaces = false;
	for (var row = 0; row < matrix.length; row++) {
		for (var col = 0; col < matrix[row].length; col++) {
			if (matrix[row][col] === 0) {
				checkSpaces = true;
				break;
			}
		}

		if (checkSpaces === true) {
			break;
		}
	}

	if (checkSpaces === false) {
		return true;
	}

	for (var num = 1; num <= 9; num++) {
		if (isSafe(matrix, row, col, num)) {
			matrix[row][col] = num;
			if (solveSudoku(matrix)) {
				return true;
			}

			matrix[row][col] = 0;
		}
	}

	return false;
}

function isSafe(matrix, row, col, num) {
	return (
		!checkRow(matrix, row, num) &&
		!checkCol(matrix, col, num) &&
		!checkBox(matrix, row - (row % 3), col - (col % 3), num)
	);
}

function checkRow(matrix, row, num) {
	for (var col = 0; col < matrix.length; col++) {
		if (matrix[row][col] === num) {
			return true;
		}
	}
	return false;
}
function checkCol(matrix, col, num) {
	for (var row = 0; row < matrix.length; row++) {
		if (matrix[row][col] === num) {
			return true;
		}
	}
	return false;
}
function checkBox(matrix, startRow, startCol, num) {
	for (var row = 0; row < 3; row++) {
		for (var col = 0; col < 3; col++) {
			if (matrix[row + startRow][col + startCol] === num) {
				return true;
			}
		}
	}
	return false;
}

var grid1 = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9],
];
var grid2 = [
	[0, 0, 5, 3, 0, 0, 0, 0, 0],
	[8, 0, 0, 0, 0, 0, 0, 2, 0],
	[0, 7, 0, 0, 1, 0, 5, 0, 0],
	[4, 0, 0, 0, 0, 5, 3, 0, 0],
	[0, 1, 0, 0, 7, 0, 0, 0, 6],
	[0, 0, 3, 2, 0, 0, 0, 8, 0],
	[0, 6, 0, 5, 0, 0, 0, 0, 9],
	[0, 0, 4, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 9, 7, 0, 0],
];

console.log(sudoku(grid2));
