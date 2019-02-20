function countSort(arr) {
  const countingMap = Object.create(null)
  const res = []
  
  /* init countingMap */
  for (let i = 0; i < 10; i++) {
    countingMap[i] = 0
  }

  /* counting */
  arr.forEach(value => countingMap[value] += 1)

  /* generate result */
  for (let num = 0; num < 10; num++) {
    for (let j = 0; j < countingMap[num]; j++) {
      res.push(num)
    }
  }

  return res
}

// test
const a = [1, 2, 1, 3, 8, 9, 5, 4, 3, 7, 6, 8]
const sorted = countSort(a)
console.log(sorted)
