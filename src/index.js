// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArray = [];
    if (matrix != undefined) {
        let n = 0;
        for (let i = 0; i < matrix.length; i++) {
            if (i > 0 && i % 2 != 0) {
                matrix[i] = matrix[i].reverse();
            }
            for (let j = 0; j < matrix[i].length; j++) {
                newArray[n] = matrix[i][j];
                n++;
            }
        }
        
    }
    return newArray;
}