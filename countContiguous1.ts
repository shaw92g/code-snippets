/*
1's are considered contiguous id they are side by side either horizontally or vertically (not diagonally)
in an array of 1's and 0's
*/

function countContiguous1(matrix: number[][]): number{
    let count = 0;
	for(let i=0; i<matrix.length; i++){
		const row = matrix[i];

		for(let j=0; j<row.length; j++){
			if(row[j]===1){
				count++;
				consumeContiguous1s(matrix, i, j);
			}
		}
	}

	return count;
}


function consumeContiguous1s(matrix: number[][], rowIndex: number, colIndex: number): void{
	// console.log(`${rowIndex},${colIndex}`);
	for(let i=rowIndex; i<matrix.length; i++){
		const row = matrix[i];

		matrix[rowIndex][colIndex] = 0;

		if(colIndex+1<row.length && matrix[rowIndex][colIndex+1]===1){
			consumeContiguous1s(matrix, rowIndex, colIndex+1);
		}

		if(colIndex-1>=0 && matrix[rowIndex][colIndex-1]===1){
			consumeContiguous1s(matrix, rowIndex, colIndex-1);
		}

		if(rowIndex+1<matrix.length && matrix[rowIndex+1][colIndex]===1){
			consumeContiguous1s(matrix, rowIndex+1, colIndex);
		}

		if(rowIndex-1>=0 && matrix[rowIndex-1][colIndex]===1){
			consumeContiguous1s(matrix, rowIndex-1, colIndex);
		}
	}
}


const matrix = [
	[1,1,1,1,1],
	[1,1,1,0,0],
	[1,1,1,0,0],
	[1,1,0,0,1],
	[0,1,0,1,1]
];

console.log(countContiguous1(matrix));