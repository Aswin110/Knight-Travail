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

function knightMoves(start,stop) {
	let boardOfParent = storeParent();
	let u;
	let queue = [start];
	while (u !== stop) {
		u = queue.shift();
		let nextMove = neighbourCoordinates(u);
		console.log('next move',nextMove);
		nextMove.map((element) => {

			if (!(boardOfParent.get(`[${element}]`))) {
				boardOfParent.set(`[${element}]`, u);
			}
		});
		
		console.log('check the moves',nextMove.includes(stop));
		break;
	}
	console.log('parent added',boardOfParent);
	console.log('u',u);
}

neighbourCoordinates([7,7]);
gameBoard();
knightMoves([0,0],[3,3]);