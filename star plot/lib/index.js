const margin = {
  top: 32,
  right: 50,
  bottom: 20,
  left: 50,
}
const width = 240 - margin.left - margin.right
const height = 240 - margin.top - margin.bottom
const labelMargin = 8
const size = 100

// var scale = d3.scale.linear().domain([0, 100]).range([0, 100])

const keys = Object.keys(cars[0])
const groupKey = 'name'
keys.splice(keys.indexOf(groupKey), 1)

let scales = []
for (let key of keys) {
  let data = []
  for (let car of cars) {
    data.push(car[key])
  }
  scales.push(
    d3.scale
      .linear()
      .domain([0, d3.max(data)])
      .range([0, size])
  )
}

let star = d3
  .starPlot()
  .width(width)
  .properties(keys)
  .scales(scales)
  .labels(keys)
  .title(function (d) {
    return d.name
  })
  .margin(margin)
  .labelMargin(labelMargin)

cars.forEach(function (d, i) {
  star.includeLabels(i % 4 === 0 ? true : false)

  var container = d3.select('#vis').append('div').attr('class', 'container')

  var svg = container
    .append('svg')
    .attr('class', 'chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', width + margin.top + margin.bottom)

  var starG = svg.append('g').datum(d).call(star)
})
