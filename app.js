function neighbourCoordinates(arr){
	let neighbour = [];
	let directions = [
		[-1,-2],
		[-2,-1],
		[ 1,-2],
		[ 2,-1],
		[ 2, 1],
		[ 1, 2],
		[-1, 2],
		[-2, 1]
	];

	for (let direction of directions) {
		let value = [arr[0]-direction[0],arr[1]-direction[1]];
		if (value[0] >= 0 && value[0] < 8 && value[1] >= 0 && value[1] < 8 ){
			neighbour.push(value);
		}
	}
	return neighbour;
}

function storeParent () {
	let map = new Map();
	for (let i = 0; i < 8;i++) {
		for (let j = 0;j < 8;j++){
			map.set(`[${i},${j}]`,null);
		}
	}
	return map;
}


function getPath(arr, parentBoard, path = []){
	if (parentBoard.get(`[${arr}]`)[0] === 8 && parentBoard.get(`[${arr}]`)[1] === 8) {
		path.push(arr);
		return path;}
	else {
		path.push(arr);
		return getPath(parentBoard.get(`[${arr}]`),parentBoard, path);
	}
}

function knightMoves(start,end) {
	let boardOfParent = storeParent();
	let u;
	let exactPath = [];
	let queue = [start];
	let pathFound = false;

	if (start[0] === end[0] && start[1] === end[1]){
		return [start];
	}

	while (queue.length > 0 && !pathFound) {
		u = queue.shift();
		boardOfParent.set(`[${start}]`, [8,8]);
		let nextMove = neighbourCoordinates(u);
		nextMove.map((element) => {
			if (element[0] === end[0] && element[1] === end[1]) {
				boardOfParent.set(`[${element}]`, u);
				pathFound = true;
				exactPath = getPath(element,boardOfParent);
				exactPath.reverse();
				return exactPath;
			}
			if (!(boardOfParent.get(`[${element}]`))) {
				boardOfParent.set(`[${element}]`, u);
				queue.push(element);
			}
		});	
	}
	return exactPath;
}

export default knightMoves;

