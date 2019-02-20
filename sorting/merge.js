function merge(left, right) {
  const res = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  return res.concat(left, right)
}

function mergeSort(arr) {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  
  return  merge(mergeSort(left), mergeSort(right))
}

// test
const a = [2, 39, 81, 39, -1, -5, 0, 0, 1]
const sorted = mergeSort(a)

console.log(sorted)