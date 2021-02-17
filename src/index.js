exports.min = function min (array = []) {
    if (!array.length) return 0
    return Math.min(...array)
}

exports.max = function max (array = []) {
  return !array.length ? 0 : Math.max(...array)
}

exports.avg = function avg (array = []) {
  return !array.length ? 0 : array.reduce((sum, el) => sum + el, 0)/array.length
}

