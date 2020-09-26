const width = 953
const height = 600
const margin = { top: 10, right: 10, bottom: 20, left: 40 }

const series = d3
  .stack()
  .keys(data.columns)(data)
  .map((d) => (d.forEach((d1) => (d1.key = d.key)), d))

const x = d3
  .scaleBand()
  .domain(data.map((d) => d.year))
  .range([margin.left, width - margin.right])
  .padding(0.1)
const y = d3
  .scaleLinear()
  .domain([0, d3.max(series, (d) => d3.max(d, (d) => d[1]))])
  .rangeRound([height - margin.bottom, margin.top])
const color = d3
  .scaleOrdinal()
  .domain(series.map((d) => d.key))
  .range(['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3'])
  .unknown('#ccc')
const xAxis = (g) =>
  g
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .call((g) => g.selectAll('.domain').remove())

function formatTick(d) {
  // const s = (d / 1e6).toFixed(1);
  return this.parentNode.nextSibling ? `${d}` : `${d} USD`
}
const yAxis = (g) =>
  g
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, 's').tickFormat(formatTick))
    .call((g) => g.selectAll('.domain').remove())

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
  .data(series)
  .join('g')
  .attr('fill', (d) => color(d.key))
  .selectAll('rect')
  .data((d) => d)
  .join('rect')
  .attr('x', (d) => x(d.data.year))
  .attr('y', (d) => y(d[1]))
  .attr('height', (d) => y(d[0]) - y(d[1]))
  .attr('width', x.bandwidth())

svg.append('g').call(xAxis)

svg.append('g').call(yAxis)

let legend = (svg) => {
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
    .text((d) => d)
}

svg.append('g').call(legend)
