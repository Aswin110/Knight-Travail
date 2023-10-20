const gameBoard = () => {
	const table = document.querySelector('.centre');
	const chessTable = document.createElement('table');
	chessTable.className = 'tableCentre';
	for(let i = 0; i < 8; i++) {
		const tableRow = document.createElement('tr');
		let row = i;
		tableRow.textContent = row;
		for(let j = 0; j < 8; j++) {
			const tableColumn = document.createElement('td');
			let column = j;
			tableColumn.textContent = column;
			tableColumn.className = 'cell';
			tableRow.appendChild(tableColumn);
		}
		chessTable.appendChild(tableRow);
	}
    

	table.appendChild(chessTable);
};

export { gameBoard };