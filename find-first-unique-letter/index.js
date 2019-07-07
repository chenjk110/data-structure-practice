function findFisrtUniqueLetter(str) {
  for (var i = 0, len = str.length; i < len; i++) {
    var c = str[i]
    if (str.indexOf(c) === str.lastIndexOf(c)) {
      return i
    }
  }
  return -1
}