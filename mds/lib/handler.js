function zScore (data) {
  const dims = Object.keys(data[0])

  let res = []
  for (let i = 0; i < data.length; i++) {
    res[i] = {}
  }

  // z-score normalization
  for (let i = 0; i < dims.length; i++) {
    let mean = 0
    let stdDev = 0
    for (let j = 0; j < data.length; j++) {
      mean += +data[j][dims[i]]
    }
    mean /= data.length
    for (let j = 0; j < data.length; j++) {
      let dev = data[j][dims[i]] - mean
      stdDev += dev * dev
    }
    stdDev = Math.sqrt(stdDev / (data.length - 1))
    for (let j = 0; j < data.length; j++) {
      res[j][dims[i]] = (data[j][dims[i]] - mean) / stdDev
    }
  }

  return res
}

function getDistMat (data) {
  const dims = Object.keys(data[0])

  let res = []
  for (let i = 0; i < data.length; i++) {
    res[i] = []
  }
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (i === j) {
        res[i][j] = 0
      } else {
        let dist = 0
        for (let k = 0; k < dims.length; k++) {
          dist += Math.pow(data[i][dims[k]] - data[j][dims[k]], 2)
        }
        res[i][j] = Math.sqrt(dist)
        res[j][i] = res[i][j]
      }
    }
  }

  return res
}

const data = zScore(raw)
const distMat = getDistMat(data)
const proj = mds.classic(distMat, 2)