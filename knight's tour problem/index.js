function knightsTour(n) {
	var board = [];

	for (var i = 0; i < n; i++) {
		board[i] = [];
		for (var j = 0; j < n; j++) {
			board[i][j] = 0;
		}
	}

	if (solveProblem(board, n, 0, 0, 1) === true) {
		return board;
	}

	return "No Solution Found";
}

function solveProblem(board, n, currX, currY, pos) {
	if (pos === n * n) {
		return true;
	}

	var moveX = [2, 1, -1, -2, -2, -1, 1, 2];
	var moveY = [1, 2, 2, 1, -1, -2, -2, -1];

	for (var i = 0; i < n; i++) {
		var newPosX = currX + moveX[i];
		var newPosY = currY + moveY[i];

		if (isSafe(n, newPosX, newPosY, board) === true) {
			board[newPosX][newPosY] = pos;
			if (solveProblem(board, n, newPosX, newPosY, pos + 1)) {
				return true;
			}
			board[newPosX][newPosY] = 0;
		}
	}
	return false;
}

function isSafe(n, x, y, board) {
	if (x >= 0 && y >= 0 && x < n && y < n && board[x][y] === 0) {
		return true;
	}
	return false;
}

console.log(knightsTour(8));
