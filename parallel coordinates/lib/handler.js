// convert array of objects to array
function getDataArray (data, dims) {
  let array = []

  for (let i = 0; i < dims.length; i++) {
    for (let j = 0; j < data.length; j++) {
      array[i] = data.map(d => d[dims[i]])
    }
  }

  return array
}

function getDataExtent (array) {
  let extent = []

  for (let i = 0; i < array.length; i++) {
    extent.push([Math.min(...array[i]), Math.max(...array[i])])
  }

  return extent
}

// 得到的最小值不包括0
function getExtentIn2dArray(arr) {
  let max = Math.max(...arr[0])
  let min = Math.min(...arr[0])
  for (let i = 0; i < arr.length; i++) {
    max = max >= Math.max(...arr[i]) ? max : Math.max(...arr[i])
    min = min <= Math.min(...arr[i]) ? min : Math.min(...arr[i])
  }

  return [min, max]
}

Array.prototype.remove = function (val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}

function getNormalizedArray(arr, extent) {
  let normalizedArray = []

  for (let i = 0; i < arr.length; i++) {
    normalizedArray[i] = []

    for (var j = 0; j < arr[i].length; j++) {
      normalizedArray[i][j] = (arr[i][j] - extent[i][0]) / (extent[i][1] - extent[i][0])
    }
  }

  return normalizedArray
}

function getVectorDistMatrix (vector) {
  let distMatrix = []

  for (let i = 0; i < vector.length; i++) {
    distMatrix[i] = []
    for (let j = 0; j < vector.length; j++) {
      distMatrix[i][j] = Math.sqrt(Math.pow(vector[i] - vector[j], 2))
    }
  }

  return distMatrix
}

function getMatrixRowMean (arr) {
  let rowMean = []

  for (let i = 0; i < arr.length; i++) {
    rowMean.push(numeric.sum(arr[i]) / arr[i].length)
  }

  return rowMean
}

function getMatrixColMean (arr) {
  let colMean = []
  let sum = 0

  for (let i = 0; i < arr[0].length; i++) {
    let sum = 0
    for (let j = 0; j < arr.length; j++) {
      sum += arr[i][j]
    }
    colMean.push(sum / arr.length)
  }  

  return colMean
}

function getMatrixMean (vectorMean) {
  return numeric.sum(vectorMean) / vectorMean.length
}

function getCenteredDistMatrix (vector) {
  const distMatrix = getVectorDistMatrix(vector)
  const matrixRowMean = getMatrixRowMean(distMatrix)
  const matrixColMean = getMatrixColMean(distMatrix)
  const matrixMean = getMatrixMean(matrixRowMean)

  let centeredDistMatrix = []
  for (let i = 0; i < distMatrix.length; i++) {
    centeredDistMatrix[i] = []
    for (let j = 0; j < distMatrix[i].length; j++) {
      centeredDistMatrix[i][j] = distMatrix[i][j] - matrixRowMean[i] - matrixColMean[j] + matrixMean
    }
  }

  return centeredDistMatrix
}

function getMatrixDotProduct (arr1, arr2) {
  return numeric.sum(numeric.mul(arr1, arr2))
}

function getDistCovariance (arr1, arr2) {
  return Math.sqrt(getMatrixDotProduct(arr1, arr2) / Math.pow(arr1.length, 2))
}

function getDistVariance (arr) {
  return getDistCovariance(arr, arr)
}

function getDistCorrelation (arr1, arr2) {
  return getDistCovariance(arr1, arr2) / Math.sqrt(getDistVariance(arr1) * getDistVariance(arr2))
}

function getDistCorrelationMatrix (arr, extent) {
  let normalizedArr = arr
  // let normalizedArr = getNormalizedArray(arr, extent)
  let distCorrelationMatrix = []
  let centeredDistMatrix = []

  for (let i = 0; i < arr.length; i++) {
    centeredDistMatrix.push(getCenteredDistMatrix(normalizedArr[i]))
  }

  for (let i = 0; i < normalizedArr.length; i++) {
    distCorrelationMatrix[i] = []
    for (let j = i; j < normalizedArr.length; j++) {
      if (i === j) {
        distCorrelationMatrix[i][j] = 1
      } else {
        distCorrelationMatrix[i][j] = getDistCorrelation(normalizedArr[i], normalizedArr[j])
      }
    }
  }

  for (let i = 0; i < normalizedArr.length; i++) {
    for (let j = i + 1; j < normalizedArr.length; j++) {
      distCorrelationMatrix[j][i] = distCorrelationMatrix[i][j]
    }
  }
  
  return distCorrelationMatrix
}
















