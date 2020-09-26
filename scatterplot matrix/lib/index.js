const padding = 10
width = 800
dis = 30
cell_width = (width - dis * 2 - padding * 3) / 4

const svg = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', width)
const g = svg
  .append('g')
  .attr('transform', 'translate(' + (dis + 20) + ', ' + dis + ')')

// g.append('circle')
// 	.attr('cx', 0)
// 	.attr('cy', 0)
// 	.attr('r', 1)

// console.log(cell_width)

// function getRange(n1, n2){
// 	const x1 = dis + (n1 - 1) * cell_width + (n1 - 1) * padding
// 		x2 = dis + n1 * cell_width + (n1 - 1) * padding
// 		y1 = dis + (4 - n2) * cell_width + (4 - n2) * padding
// 		y2 = dis + (5 - n2) * cell_width + (4 - n2) * padding

// 	const array = [ x1, x2, y1, y2 ]
// 	return array
// }

// const a = cell(1,1)
// console.log(a)

// const sepalL = variedDomain(data, 'sepalLength')
// const sepalW = variedDomain(data, 'sepalWidth')
// const petalL = variedDomain(data, 'petalLength')
// const petalW = variedDomain(data, 'petalWidth')
// console.log(sepalL, sepalW, petalL, petalW)

const numbering = {
  sepalLength: 0,
  sepalWidth: 1,
  petalLength: 2,
  petalWidth: 3,
}
// console.log(numbering['sepalLength'])

// function getDomain(n){
// 	if(n = 1){
// 		return sepalL
// 	} else if(n = 2) {
// 		return sepalW
// 	} else if(n = 3){
// 		return petalL
// 	} else if(n = 4){
// 		return petalW
// 	}
// }

// console.log(getDomain(1))

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value)
}

// console.log(getKeyByValue(numbering, 1))

const category = Object.keys(data[0]).slice(0, 4)
// console.log(category)

function variedDomain(d, di) {
  let array = []
  for (let i = 0; i < d.length; i++) {
    array.push(d[i][di])
  }
  const a = d3.extent(array)
  return a
}

let order = []

for (let i = 0; i < category.length; i++) {
  for (let j = category.length - 1; j > -1; j--) {
    order.push([i, j])
  }
}

// console.log(order)

const x = d3.scaleLinear()
// .range([0, width])

const xAxis = d3.axisBottom().scale(x).ticks(6)

const y = d3.scaleLinear()

const yAxis = d3.axisLeft().scale(y).ticks(6)

var brush = d3
  .brush()
  .on('start', brushstart)
  .on('brush', brushmove)
  .on('end', brushend)

// console.log(brush)

function draw() {
  const cells = g
    .selectAll('.cell')
    .data(order)
    .enter()
    .append('g')
    .attr('class', 'cell')
    // .append('rect')
    // .attr('width', cell_width)
    // .attr('height', cell_width)
    // .attr('fill', 'steelblue')
    .attr('transform', function (d) {
      return (
        'translate(' +
        d[0] * (cell_width + padding) +
        ',' +
        (category.length - d[1] - 1) * (cell_width + padding) +
        ')'
      )
    })
    .each(plot)

  g.selectAll('.x.axis')
    .data(category)
    .enter()
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', function (d, i) {
      return (
        'translate(0, ' + ((cell_width + padding) * category.length - 10) + ')'
      )
    })
    .each(function (d, i) {
      x.range([
        cell_width * i + padding * i,
        cell_width * (i + 1) + padding * i,
      ]).domain(variedDomain(data, d))
      d3.select(this).call(xAxis)
    })

  g.selectAll('.y.axis')
    .data(category)
    .enter()
    .append('g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + -(padding - 10) + ', 0)')
    // .attr('transform', function(d, i) { return 'translate(0, '+(cell_width+padding)*(category.length-i-1)+')'})
    .each(function (d, i) {
      y.range([
        (cell_width + padding) * (category.length - i - 1),
        (cell_width + padding) * (category.length - i - 1) + cell_width,
      ]).domain(variedDomain(data, d))
      d3.select(this).call(yAxis)
    })

  cells
    .filter(function (d) {
      return d[0] === d[1]
    })
    .append('text')
    .attr('x', padding - 4)
    .attr('y', padding + 5)
    .attr('dy', '0')
    .text(function (d) {
      return getKeyByValue(numbering, d[0])
    })
    .style('font-size', '0.7em')
    .style('font-weight', 'bold')
}

draw()

function plot(p) {
  const cell = d3.select(this)

  const a = getKeyByValue(numbering, p[0])
  const b = getKeyByValue(numbering, p[1])

  x.domain(variedDomain(data, a)).range([0, cell_width])
  y.domain(variedDomain(data, b)).range([cell_width, 0])

  var color = d3.scaleOrdinal(d3.schemeCategory10)

  cell
    .append('rect')
    .attr('class', 'frame')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', cell_width)
    .attr('height', cell_width)
    .attr('fill', 'none')
    .attr('stroke', 'black')

  cell
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'circle')
    .attr('cx', function (d) {
      return x(d[a])
    })
    .attr('cy', function (d) {
      return y(d[b])
    })
    .attr('r', 4)
    .style('fill', 'black')
    .attr('opacity', 0.3)

  cell.call(
    brush.extent([
      [0, 0],
      [cell_width, cell_width],
    ])
  )
}

//tick 拉长
svg
  .selectAll('.y .tick')
  .selectAll('line')
  .attr('x2', '800')
  .attr('opacity', 0.1)

svg
  .selectAll('.x .tick')
  .selectAll('line')
  .attr('y2', '-800')
  .attr('opacity', 0.1)

var brushCell

//Clear the previously-active brush, if any.
function brushstart(p) {
  if (brushCell !== this) {
    d3.select(brushCell).call(brush.move, null)
    brushCell = this
    const a = getKeyByValue(numbering, p[0])
    const b = getKeyByValue(numbering, p[1])

    x.domain(variedDomain(data, a)).range([0, cell_width])
    y.domain(variedDomain(data, b)).range([cell_width, 0])
  }
}

// Highlight the selected circles.
function brushmove(p) {
  var e = d3.brushSelection(this)
  const a = getKeyByValue(numbering, p[0])
  const b = getKeyByValue(numbering, p[1])
  svg.selectAll('circle').classed('hidden', function (d) {
    if (!e) {
      return false
    } else if (
      x(+d[a]) > e[0][0] &&
      x(+d[a]) < e[1][0] &&
      y(+d[b]) > e[0][1] &&
      y(+d[b]) < e[1][1]
    ) {
      return false
    } else {
      return true
    }
  })
}

// If the brush is empty, select all circles.
function brushend() {
  var e = d3.brushSelection(this)
  if (e === null) svg.selectAll('.hidden').classed('hidden', false)
}

// return !e
//   ? false
//   : (
//     e[0][0] > x(+d[a]) || x(+d[b]) > e[1][0]
//     || e[0][1] > y(+d[a]) || y(+d[b]) > e[1][1]
//   );
