import { gameBoard } from "./gameBoard.js";

class Tree {
	constructor(data = [] , move1 = null, move2 = null, move3 = null, move4 = null, move5 = null, move6 = null, move7 = null, move8 = null) {
		this.data = data;
		this.move1 = move1;
		this.move2 = move2;
		this.move3 = move3;
		this.move4 = move4;
		this.move5 = move5;
		this.move6 = move6;
		this.move7 = move7;
		this.move8 = move8;
	}
}
 
class Board {
	constructor (obj) {
		let array = Object.keys(obj).map((key) => [obj[key]]);
		console.log(array);
	}

	directions = [
		[-1, -2],
		[-1, 2 ],
		[-2, -1],
		[-2, 1 ],
		[ 1, 2 ],
		[ 1, -2],
		[ 2, 1 ],
		[ 2, -1]
	];
    
	// createArray (x, y, arr = []) {
		
	// 	arr.push([x, y]);
	// 	for (let direction of this.directions) {
	// 		let next = [x - direction[0], y - direction[1]];

	// 		if (next[0] >= 0 && next[0] <= 7 && next[1] >= 0 && next[1] <=7) {
	// 			arr.push(next);
	// 		}	
	// 	}
	// 	console.log('array',arr);
	// 	let tree =  new Tree (arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8]);
	// 	console.log('tree',tree);
	// 	return tree;
	// }

	createArray (arr = [], dist = [] ) {
		let array = [];
		let distance = 1;
		array.push(arr);
		let root = new Tree(arr);
		console.log('root',root);
		// for (let direction of this.directions) {
		// 	let next = [arr[0] - direction[0], arr[1] - direction[1]];
		// 	if (next[0] >= 0 && next[0] <= 7 && next[1] >= 0 && next[1] <=7) {
		// 		array.push(next);
		// 	}	
		// }population

		// for (const key in root) {
		// 	if (root.hasOwnProperty(key)&& root[key] ===null) {
		// 		console.log(`${key}: ${root[key]}`); 
		// 	}
		// }

		for (let i = 0; i < this.directions.length; i++) {
			let direction = this.directions[i];
			let next = [arr[0] - direction[0], arr[1] - direction[1]];
            
			if (next[0] >= 0 && next[0] <= 7 && next[1] >= 0 && next[1] <= 7) {
				array.push(next);
				console.log(`Direction at index ${i}: [${direction[0]}, ${direction[1]}]`);
			}
		}
		console.log('array',array);
		let tree =  new Tree (array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8]);
		console.log('tree',tree);
		return tree;
	}

	// buildTree (arr , i = 1) {
	// 	if (arr === null) return; 
	// 	let root = new Tree(arr.shift());
	// 	while(arr.length > 0) {
	//         arr[i] = 
	// 	}
	// }
}
gameBoard();
let tree = new Tree();
let board = new Board(tree);
console.log(board.createArray([0,0], [2,1]));