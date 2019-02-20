const swap = require('../utils/swap')

function quickSort(arr) {
  if (arr.length < 2) return arr
  const basic = arr[0]
  const left = []
  const right = []
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i]
    if (basic > value) {
      left.push(value)
    } else {
      right.push(value)
    }
  }
  return quickSort(left).concat(basic, quickSort(right))
}

// test
const a = [1, 2, 3, 1, -3, -9, 30, 10, 6, 98]
const sorted = quickSort(a)
console.log(sorted)
