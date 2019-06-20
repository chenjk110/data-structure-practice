const arr = []

for (let i = 0; i < 100; i++) {
  arr.push(i + 1)
}

function findIndex(val) {
  let upperBound = arr.length - 1
  let lowerBound = 0
  const getMidIdx = () => Math.floor((upperBound + lowerBound) / 2)
  let midIndex = getMidIdx()

  while (midIndex !== lowerBound) {
    const target = arr[midIndex]
    if (val === target) return midIndex
    // find at left
    if (val < target) {
      upperBound = midIndex - 1
      midIndex = getMidIdx()
    // find at right
    } else {
      lowerBound = midIndex + 1
      midIndex = getMidIdx()
    }
  }

  return -1
}

console.log(findIndex(3))