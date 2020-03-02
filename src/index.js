
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let arr = [];
    for(let i = 0; i < matrix.length; i++) {
      if (i%2 === 0) {
        for(let k = 0; k < matrix[i].length; k++) {
          arr.push(matrix[i][k]);
        }
      } else {
        for(let z = matrix[i].length-1; z >= 0; z--) {
          arr.push(matrix[i][z]);
        }
      }
    } return arr;
}
