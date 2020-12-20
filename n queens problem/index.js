function nQueen(n) {
	var sol = [];
	for (var i = 0; i < n; i++) {
		sol[i] = [];
		for (var j = 0; j < n; j++) {
			sol[i][j] = 0;
		}
	}

	if (solveQueen(n, sol, 0) === true) {
		return sol;
	}

	return "No Solution found";
}

function solveQueen(n, sol, col) {
	if (col >= n) {
		return true;
	}
	for (var row = 0; row < n; row++) {
		if (isSafe(sol, col, row, n) === true) {
			sol[row][col] = 1;

			if (solveQueen(n, sol, col + 1)) {
				return true;
			}

			sol[row][col] = 0;
		}
	}
	return false;
}

function isSafe(sol, col, row, n) {
	return !checkRow(row, sol, n) && !checkDiagonal(col, sol, n, row);
}

function checkRow(row, sol, n) {
	for (var col = 0; col < n; col++) {
		if (sol[row][col] === 1) {
			return true;
		}
	}
	return false;
}

function checkDiagonal(col, sol, n, row) {
	for (var i = row, j = col; i >= 0 && j >= 0; i--, j--) {
		if (sol[i][j] === 1) {
			return true;
		}
	}
	for (var i = row, j = col; j >= 0 && i < n; i++, j--) {
		if (sol[i][j] === 1) {
			return true;
		}
	}

	return false;
}
console.log(nQueen(8));
