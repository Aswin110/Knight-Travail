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
	console.log(neighbour);
	return neighbour;
}



neighbourCoordinates([7,7]);
gameBoard();