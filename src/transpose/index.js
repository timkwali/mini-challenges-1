/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let output = [];
  for(let i = 0; i < array.length; i++) {
    let currentArray = array[i];
    for(let j = 0; j < currentArray.length; j++) {
      if(i === 0) {
        output.push([currentArray[j]]);
      } else {
        output[j].push(currentArray[j]);
      }
    }
  }

}

module.exports = transpose;
