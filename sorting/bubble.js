const swap = require('../../utils/swap')

function bubbleSorting(list) {
  const arr = list.concat()
  for (let i = arr.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
  }
  return arr
}

// testing
const list = [5, 1, 3, 2, 4]
console.log(bubbleSorting(list))