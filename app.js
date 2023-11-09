import { gameBoard } from './gameBoard.js';

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
		if (value[0] > 0 && value[0] < 7 && value[1] > 0 && value[1] < 7 ){
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

let path = [] ;
function getPath(arr, parentBoard){
	if (parentBoard.get(`[${arr}]`) === null) {
		path.push(arr);
		return path;}
	else {
		path.push(arr);
		getPath(parentBoard.get(`[${arr}]`),parentBoard);
	}
	return path;
}

function knightMoves(start,end) {
	let boardOfParent = storeParent();
	let u;
	let queue = [start];
	let pathFound = false;

	while (queue.length > 0 && !pathFound) {
		u = queue.shift();
		let nextMove = neighbourCoordinates(u);
		nextMove.map((element) => {
			if (element[0] === end[0] && element[1] === end[1]) {
				boardOfParent.set(`[${element}]`, u);
				pathFound = true;
				let exactPath = getPath(element,boardOfParent);
				exactPath.reverse();
				console.log(exactPath);
				return 'path';
			}
			if (!(boardOfParent.get(`[${element}]`))) {
				boardOfParent.set(`[${element}]`, u);
				queue.push(element);
			}
		});
	}
}

neighbourCoordinates([7,7]);
gameBoard();
knightMoves([0,0],[3,3]);