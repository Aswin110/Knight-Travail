const gameBoard = () => {
	const table = document.querySelector('.centre');

	const chessTable = document.createElement('table');
	chessTable.className = 'tableCentre';

	const resetKnightButton = document.querySelector('.clear');
	let defaultCoord = [0,0];

	const img = document.createElement('img');
	img.src = '/knight.svg'; 

	for(let i = 0; i < 8; i++) {
		const tableRow = document.createElement('tr');
		let row = i;
		tableRow.textContent = row;
		for(let j = 0; j < 8; j++) {
			const tableColumn = document.createElement('td');
			let column = j;
			tableColumn.textContent = `${row} ,${column}`;
			tableColumn.setAttribute('data-array',`[${row}, ${column}]`);
		
			if ((i+j)% 2 == 0){
				tableColumn.className = 'black-cell';
			} else {
				tableColumn.className = 'white-cell';
			}

			tableRow.appendChild(tableColumn);
		}
		chessTable.appendChild(tableRow);
	}
    
    
	const allNodes = chessTable.querySelectorAll('td');

	setKnight(defaultCoord);

	//changes knight position
	// function changePosition(){
	allNodes.forEach(function(node) {
		node.addEventListener('click', function() {
			coord(node);
		});
	});
	// }
    
	function coord(node) {
		let coordinate = node.getAttribute('data-array');
		removeKnight();
		node.appendChild(img); 
		return coordinate;
	}

	//remove knight from chess board
	function removeKnight()  {
		allNodes.forEach((node)=>{
			if(node.hasChildNodes()) {   
				node.removeChild(node.childNodes[0]);
			} 
		});
	}

	table.appendChild(chessTable);


	function setKnight(arr = []) {
		allNodes.forEach((node) => {
			let coordinate = node.getAttribute('data-array');
			if (arraysAreEqual(arr, JSON.parse(coordinate))) {
				node.appendChild(img);
			}
			if (node.contains(img)){
				let coordinate = node.getAttribute('data-array');
				defaultCoord = JSON.parse(coordinate);
				return defaultCoord;
			}
		});
	}

	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) return false;
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) return false;
		}
		return true;
	}
    

	resetKnightButton.addEventListener('click' ,function(){
		setKnight(defaultCoord);
	});

	return { defaultCoord, };
};

export { gameBoard };