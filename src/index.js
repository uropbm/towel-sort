
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let arr1 = []
  let arr2 = []
  let arrResult = []

  if (!matrix) {
    return []
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
        arr1 = matrix[i].slice(0, matrix[i].length)
        console.log(arr1)
        arrResult = arrResult.concat(arr1)
    } else {
        arr2 = matrix[i].sort((a, b) => b - a)
        console.log(arr2)
        arrResult = arrResult.concat(arr2)
    }
  }

  return arrResult
  
}
