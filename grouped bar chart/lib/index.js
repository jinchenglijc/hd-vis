const width = 953
const height = 500
const margin = { top: 10, right: 10, bottom: 20, left: 40 }

const groupKey = 'year'
const columns = data.columns
const groupX = d3
  .scaleBand()
  .domain(data.map((d) => d[groupKey]))
  .rangeRound([margin.left, width - margin.right])
  .paddingInner(0.1)
const rectX = d3
  .scaleBand()
  .domain(columns)
  .rangeRound([0, groupX.bandwidth()])
  .padding(0.05)
const y = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d3.max(columns, (column) => d[column]))])
  .nice()
  .rangeRound([height - margin.bottom, margin.top])
const color = d3
  .scaleOrdinal()
  .range(['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3'])
const xAxis = (g) =>
  g
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(groupX).tickSizeOuter(0))
    .call((g) => g.select('.domain').remove())

function formatTick(d) {
  // const s = (d / 1e6).toFixed(1);
  return this.parentNode.nextSibling ? `${d}` : `${d} USD`
}
const yAxis = (g) =>
  g
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, 's').tickFormat(formatTick))
    .call((g) => g.select('.domain').remove())
    .call((g) =>
      g
        .select('.tick:last-of-type text')
        .clone()
        .attr('x', 3)
        .attr('text-anchor', 'start')
        .attr('font-weight', 'bold')
        .text(data.y)
    )

const legend = (svg) => {
  const g = svg
    .attr('transform', `translate(${width - 60},20)`)
    .selectAll('g')
    .data(color.domain().slice().reverse())
    .join('g')
    .attr('transform', (d, i) => `translate(0,${i * 20})`)

  g.append('rect')
    .attr('x', -19)
    .attr('width', 19)
    .attr('height', 19)
    .attr('fill', color)

  g.append('text')
    .attr('x', 10)
    .attr('y', 9.5)
    .attr('dy', '0.35em')
    .attr('class', 'legend-text')
    .text((d) => d)
}

const svg = d3
  .select('#vis')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(20, 0)')

svg
  .append('g')
  .selectAll('g')
  .data(data)
  .join('g')
  .attr('transform', (d) => `translate(${groupX(d[groupKey])},0)`)
  .selectAll('rect')
  .data((d) => columns.map((column) => ({ column, value: d[column] })))
  .join('rect')
  .attr('x', (d) => rectX(d.column))
  .attr('y', (d) => y(d.value))
  .attr('width', rectX.bandwidth())
  .attr('height', (d) => y(0) - y(d.value))
  .attr('fill', (d) => color(d.column))

svg.append('g').call(xAxis)

svg.append('g').call(yAxis)

svg.append('g').call(legend)
