function pascalsTriangle(row, col) {
	if (col === 0) {
		return 1;
	} else if (row === 0) {
		return 0;
	} else {
		return pascalsTriangle(row - 1, col) + pascalsTriangle(row - 1, col - 1);
	}
}

console.log(pascalsTriangle(5, 2));
