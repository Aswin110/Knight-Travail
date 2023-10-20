const gameBoard = () => {
	const table = document.querySelector('.centre');
	const chessTable = document.createElement('table');
	chessTable.className = 'tableCentre';
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

	setKnight([0, 0]);

	allNodes.forEach(function(allNode) {
		allNode.addEventListener('click', function(){
			let coordinate = this.getAttribute('data-array');
			console.log('coordinate',coordinate,typeof(coordinate)); //dataArray = JSON.parse("[1, 2, 3]"); use the following code to convert the string "" to an array:
			removeKnight();
			allNode.appendChild(img); //this is the real argument using this argument for debugging.
		});
	});

	function removeKnight()  {
		allNodes.forEach((node)=>{
			// console.log(node.hasChildNodes());
			if(node.hasChildNodes()) {   
				node.removeChild(node.childNodes[0]);
			} 
		});
	}

	table.appendChild(chessTable);

	function setKnight(arr = []) {
		allNodes.forEach((allNode) => {
			let coordinate = allNode.getAttribute('data-array');
            console.log(arr,' === ',JSON.parse(coordinate));
            console.log(typeof(arr),' === ',typeof(JSON.parse(coordinate)));
            console.log(arr === JSON.parse(coordinate));
			if (arraysAreEqual(arr, JSON.parse(coordinate))) {
				allNode.appendChild(img);
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
};

export { gameBoard };