const width = 953
const height = 500
const margin = { top: 10, right: 10, bottom: 20, left: 40 }

d3.csv('./lib/data.csv', d3.autoType).then((d) => {
  const data = Object.assign(d, { y: 'Population' })
  const groupKey = data.columns[0]
  const keys = data.columns.slice(1)
  const x0 = d3
    .scaleBand()
    .domain(data.map((d) => d[groupKey]))
    .rangeRound([margin.left, width - margin.right])
    .paddingInner(0.1)
  const x1 = d3
    .scaleBand()
    .domain(keys)
    .rangeRound([0, x0.bandwidth()])
    .padding(0.05)
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d3.max(keys, (key) => d[key]))])
    .nice()
    .rangeRound([height - margin.bottom, margin.top])
  const color = d3
    .scaleOrdinal()
    .range([
      '#98abc5',
      '#8a89a6',
      '#7b6888',
      '#6b486b',
      '#a05d56',
      '#d0743c',
      '#ff8c00',
    ])
  const xAxis = (g) =>
    g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x0).tickSizeOuter(0))
      .call((g) => g.select('.domain').remove())
  const yAxis = (g) =>
    g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(null, 's'))
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
      .attr('transform', `translate(${width},0)`)
      .attr('text-anchor', 'end')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
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
      .attr('x', -24)
      .attr('y', 9.5)
      .attr('dy', '0.35em')
      .text((d) => d)
  }

  const svg = d3
    .select('#vis')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  svg
    .append('g')
    .selectAll('g')
    .data(data)
    .join('g')
    .attr('transform', (d) => `translate(${x0(d[groupKey])},0)`)
    .selectAll('rect')
    .data((d) => keys.map((key) => ({ key, value: d[key] })))
    .join('rect')
    .attr('x', (d) => x1(d.key))
    .attr('y', (d) => y(d.value))
    .attr('width', x1.bandwidth())
    .attr('height', (d) => y(0) - y(d.value))
    .attr('fill', (d) => color(d.key))

  svg.append('g').call(xAxis)

  svg.append('g').call(yAxis)

  svg.append('g').call(legend)
})
