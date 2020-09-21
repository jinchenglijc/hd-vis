const numPoints = 1000
const random = d3.randomNormal()
const data = d3.range(numPoints).map((d, i) => {
  return {
    x: xVal[i],
    y: yVal[i],
    z: zVal[i],
  }
})

const width = 953
const height = width

const margin = {
  top: height * 0.1,
  right: width * 0.1,
  bottom: height * 0.1,
  left: width * 0.1,
}

//////////////////////////////////////////////////////
// STAR COORDINATES STUFF STARTS HERE

const xAccessor = (d) => d.x
const yAccessor = (d) => d.y
const zAccessor = (d) => d.z

const anchorPoint = {
  x: width * 0.5, // 👈 change this
  y: height * 0.5, // 👈 change this
}

const axesData = {
  x: {
    domain: d3.extent(data, xAccessor),
    accessor: xAccessor,
    x: width * 0.5, // 👈 change this
    y: height * 0.2, // 👈 change this
  },
  y: {
    domain: d3.extent(data, yAccessor),
    accessor: yAccessor,
    x: width * 0.76, // 👈 change this
    y: height * 0.65, // 👈 change this
  },
  z: {
    domain: d3.extent(data, zAccessor),
    accessor: zAccessor,
    x: width * 0.24, // 👈 change this
    y: height * 0.65, // 👈 change this
  },
}

const axesDataArray = Object.keys(axesData).map((key) => {
  const value = axesData[key]
  value.key = key
  return value
})

const axes = axesDataArray.map((ax) => {
  const { domain, x, y } = ax
  ax.xScale = d3.scaleLinear().domain(domain).range([anchorPoint.x, x])
  ax.yScale = d3.scaleLinear().domain(domain).range([anchorPoint.y, y])
  return ax
})

const getPoint = (d) => {
  const mapped = axes.map((axis) => {
    const value = axis.accessor(d)
    const x = axis.xScale(value) - anchorPoint.x
    const y = axis.yScale(value) - anchorPoint.y
    return {
      x,
      y,
    }
  })
  const startPoint = { x: anchorPoint.x, y: anchorPoint.y }
  const sum = mapped.reduce((pointA, pointB) => {
    return {
      x: pointA.x + pointB.x,
      y: pointA.y + pointB.y,
    }
  }, startPoint)
  return sum
}

const points = data.map((d) => {
  const { x, y } = getPoint(d)
  const radius = 5
  return {
    x,
    y,
    radius,
  }
})

// STAR COORDINATES STUFF ENDS HERE

/////////////////////////////////////////////////////
// RENDERING

const svg = d3
  .select('#vis')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

// Points
svg
  .selectAll('g.point')
  .data(points)
  .enter()
  .append('g')
  .classed('point', true)
  .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
  .append('circle')
  .style('opacity', 0.3)
  .attr('r', 3)

// Axis Lines
axes.forEach((axis) => {
  const { domain, key } = axis
  const x1 = axis.xScale(domain[0])
  const y1 = axis.yScale(domain[0])
  const x2 = axis.xScale(domain[1])
  const y2 = axis.yScale(domain[1])
  // Axis line
  svg
    .append('g')
    .classed('axis-line', true)
    .append('line')
    .style('stroke', 'black')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
  // Axis label text
  svg
    .append('g')
    .classed('axis-label', true)
    .attr('transform', `translate(${x2}, ${y2})`)
    .append('text')
    .text(key)
})
