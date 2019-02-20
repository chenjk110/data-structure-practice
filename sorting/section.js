const swap = require('../../utils/swap')

function selectionSorting(arr, start = 0) {
  if (start >= arr.length) return arr
  let min = arr[start]
  let minIdx = start
  for (let i = start; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
      minIdx = i
    }
  }

  swap(arr, start, minIdx)

  return selectionSorting(arr, start + 1)
}

const list = [1, 3, 2, 1, 5, 7, 2]
console.log(selectionSorting(list))