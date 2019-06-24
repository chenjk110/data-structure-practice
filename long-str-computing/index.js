function longStrCompute(a, b) {
  var numA = a.split('')
  var numB = b.split('')
  var res = []
  var tmp = 0

  var lastA = numA.pop() || 0
  var lastB = numB.pop() || 0

  while (lastA && lastB) {
    var sum = +lastA + +lastA + tmp
    tmp = 0
    if (sum > 9) {
      sum -= 10
      tmp = 1
    }
    res.unshift(sum)
    lastA = numA.pop() || 0
    lastB = numB.pop() || 0
  }

  if (tmp) res.unshift(tmp)

  return res.join('')
}

a = '123'
b = '123'
console.log(longStrCompute(a, b))