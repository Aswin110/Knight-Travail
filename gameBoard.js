import knightMoves from './app.js';

const gameBoard = () => {
	const table = document.querySelector('.centre');
	const chessTable = document.createElement('table');
	chessTable.className = 'tableCentre';
	const resultDisplay = document.querySelector('.result');
	const resetKnightButton = document.querySelector('.clear');
	const setKnightButton = document.querySelector('.set');
	const travailButton = document.querySelector('.travail');

	let defaultCoord = [0,0];
	let endCoordinate =[];
	const img = document.createElement('img');
	img.src = '/knight.svg'; 
	let clickOnSetKnight = false;

	for(let i = 0; i < 8; i++) {
		const tableRow = document.createElement('tr');
		let row = i;
		tableRow.textContent = row;
		for(let j = 0; j < 8; j++) {
			const tableColumn = document.createElement('td');
			let column = j;
			// tableColumn.textContent = `${row} ,${column}`;
			tableColumn.setAttribute('data-array',`[${row}, ${column}]`);
		
			if ( (i+j) % 2 == 0 ){
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
    
	function coord(node) {
		let coordinate = node.getAttribute('data-array');
		removeKnight();
		node.appendChild(img); 
		return coordinate;
	}

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
		console.log('start',defaultCoord);
	}

	function arraysAreEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) return false;
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) return false;
		}
		return true;
	}
    
	setKnightButton.addEventListener('click',function(){
		if (clickOnSetKnight === false) {
			clickOnSetKnight = true;
		} else {
			clickOnSetKnight = false;
		}

		if (setKnightButton.classList.contains('click')){
			setKnightButton.classList.remove('click');
		} else {
			setKnightButton.classList.add('click');
		}
		
		if (clickOnSetKnight) {
			allNodes.forEach(function(node) {
				node.onclick = function() {
					coord(node);
					defaultCoord = JSON.parse(coord(node));
					console.log('start',defaultCoord);
					return defaultCoord;
				};
			});
		} else (
			allNodes.forEach(function(node) {
				node.onclick = null;
			})
		);
	
	});

	resetKnightButton.addEventListener('click' ,function(){
		setKnight(defaultCoord = [0,0]);
	});

	function result(arr) {
		let arrToString = arr.map((element)=> `[${element.toString()}]`).toString();
		let distance = arr.length - 1;
		console.log(`You made it in ${distance} moves!  Here's your path: ${arrToString}`);
		resultDisplay.textContent = `You made it in ${distance} moves!  Here's your path: ${arrToString}`;
	}

	function moveKnight (arr) {
		for (let i = 0; i < arr.length;i++){
			setTimeout(() => setKnight(arr[i]), i * 1000);
		}
	}

	travailButton.addEventListener('click', function() {
		allNodes.forEach(function(node) {
			node.onclick = null;
		});

		setKnightButton.classList.remove('click');

		if (travailButton.classList.contains('click')){
			travailButton.classList.remove('click');
		} else {
			travailButton.classList.add('click');
		}

		allNodes.forEach(function(node) {
			node.addEventListener('click', function() {
				endCoordinate = JSON.parse(node.getAttribute('data-array'));
				console.log('start',defaultCoord,'end',endCoordinate);
				let moves = knightMoves(defaultCoord,endCoordinate);
				result(moves);
				moveKnight(moves);
			});
		});
	});

	return { defaultCoord, endCoordinate };
};

gameBoard();