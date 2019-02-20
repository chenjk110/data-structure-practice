const swap = require('../utils/swap')

function insertionSorting(arr) {
  if (arr.length < 2) return arr

  let min = arr[0]
  let minIndex = 0
  arr.forEach((value, index) => min > value && (minIndex = index))

  swap(arr, 0, minIndex)

  for (let i = 1; i < arr.length; i++) {
    const insert = arr[i]
    for (let j = i - 1; j >=0; j--) {
      if (insert > arr[j]) {
        arr.splice(j + 1, 0, insert)
        arr.splice(i + 1, 1)
        break
      }
    }
  }
}

// test
const a = [1, 2, -1, 3, 8, 10, 39]
insertionSorting(a)
console.log(a)