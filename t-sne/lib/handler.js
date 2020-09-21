function zScore(data) {
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

function getDistMat(data) {
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

let opt = {}
opt.epsilon = 10 // epsilon is learning rate (10 = default)
opt.perplexity = 30 // roughly how many neighbors each point influences (30 = default)
opt.dim = 2 // dimensionality of the embedding (2 = default)

let tsne = new tsnejs.tSNE(opt) // create a tSNE instance

// initialize data. Here we have 3 points and some example pairwise dissimilarities
tsne.initDataDist(distMat)

for (var k = 0; k < 500; k++) {
  tsne.step() // every time you call this, solution gets better
}

const proj = tsne.getSolution() // Y is an array of 2-D points that you can plot
