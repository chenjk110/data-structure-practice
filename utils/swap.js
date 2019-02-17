module.exports = function arrItemSwap(arr, idxA, idxB) {
  let tmp = arr[idxA]
  arr[idxA] = arr[idxB]
  arr[idxB] = tmp
}