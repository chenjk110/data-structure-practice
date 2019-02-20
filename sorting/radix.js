function radixSort(arr, pos = 0) {
  const containerMap = Object.create(null)
  let res = []
  /* init container map */
  for (let i = 0; i < 10; i++) {
    containerMap[i] = []
  }

  for (let i = 0; i < 10; i++) {
    const value = arr[i]
    const radix = value / Math.pow(10, pos) % 10 >> 0
    containerMap[radix].push(value)
  }

  if (containerMap[0].length === arr.length) return containerMap[0]

  for (let i = 0; i < 10; i++) {
    res = res.concat(containerMap[i])
  }
  
  return radixSort(res, pos + 1)
}

// test

const a = [1, 3, 8, 3, 4, 12, 3, 20, 80, 37, 319, 3213, 4282, 32817]
const sorted = radixSort(a)
console.log(sorted)