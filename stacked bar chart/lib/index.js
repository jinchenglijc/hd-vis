const width = 953
const height = 600
const margin = { top: 10, right: 10, bottom: 20, left: 40 }

legend({
  container: d3.select('#vis'),
  color: d3.scaleOrdinal(
    [
      '<10',
      '10-19',
      '20-29',
      '30-39',
      '40-49',
      '50-59',
      '60-69',
      '70-79',
      '≥80',
    ],
    d3.schemeSpectral[10]
  ),
  title: 'Age (years)',
  tickSize: 0,
})

d3.csv(
  './lib/us-population-state-age.csv',
  (d, i, columns) => (
    d3.autoType(d), (d.total = d3.sum(columns, (c) => d[c])), d
  )
).then((d) => {
  const data = d.sort((a, b) => b.total - a.total)
  const series = d3
    .stack()
    .keys(data.columns.slice(1))(data)
    .map((d) => (d.forEach((v) => (v.key = d.key)), d))
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(series, (d) => d3.max(d, (d) => d[1]))])
    .rangeRound([height - margin.bottom, margin.top])
  const color = d3
    .scaleOrdinal()
    .domain(series.map((d) => d.key))
    .range(d3.schemeSpectral[series.length])
    .unknown('#ccc')
  const xAxis = (g) =>
    g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .call((g) => g.selectAll('.domain').remove())
  const yAxis = (g) =>
    g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(null, 's'))
      .call((g) => g.selectAll('.domain').remove())

  const svg = d3
    .select('#vis')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  svg
    .append('g')
    .selectAll('g')
    .data(series)
    .join('g')
    .attr('fill', (d) => color(d.key))
    .selectAll('rect')
    .data((d) => d)
    .join('rect')
    .attr('x', (d, i) => x(d.data.name))
    .attr('y', (d) => y(d[1]))
    .attr('height', (d) => y(d[0]) - y(d[1]))
    .attr('width', x.bandwidth())
    .append('title')
    .text(
      (d) => `${d.data.name} ${d.key}
${formatValue(d.data[d.key])}`
    )

  svg.append('g').call(xAxis)

  svg.append('g').call(yAxis)
})
