const width = 600
const height = width

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
}

const x = d3
  .scaleLinear()
  .domain(d3.extent(proj, (d) => d[0]))
  .nice()
  .range([margin.left, width - margin.right])

const y = d3
  .scaleLinear()
  .domain(d3.extent(proj, (d) => d[1]))
  .nice()
  .range([height - margin.bottom, margin.top])

// const xAxis = g => g
// .attr("transform", `translate(0,${height - margin.bottom})`)
// .call(d3.axisBottom(x))
// .call(g => g.select(".domain").remove())
// .call(g => g.append("text")
//     .attr("x", width - margin.right)
//     .attr("y", -4)
//     .attr("fill", "#000")
//     .attr("font-weight", "bold")
//     .attr("text-anchor", "end")
//     .text(data.x))

// const yAxis = g => g
// .attr("transform", `translate(${margin.left},0)`)
// .call(d3.axisLeft(y))
// .call(g => g.select(".domain").remove())
// .call(g => g.select(".tick:last-of-type text").clone()
//     .attr("x", 4)
//     .attr("text-anchor", "start")
//     .attr("font-weight", "bold")
//     .text(data.y))

//     const grid = g => g
//     .attr("stroke", "currentColor")
//     .attr("stroke-opacity", 0.1)
//     .call(g => g.append("g")
//       .selectAll("line")
//       .data(x.ticks())
//       .join("line")
//         .attr("x1", d => 0.5 + x(d))
//         .attr("x2", d => 0.5 + x(d))
//         .attr("y1", margin.top)
//         .attr("y2", height - margin.bottom))
//     .call(g => g.append("g")
//       .selectAll("line")
//       .data(y.ticks())
//       .join("line")
//         .attr("y1", d => 0.5 + y(d))
//         .attr("y2", d => 0.5 + y(d))
//         .attr("x1", margin.left)
//         .attr("x2", width - margin.right));

const svg = d3
  .select('#vis')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

//   svg.append("g")
//   .call(xAxis);

// svg.append("g")
//   .call(yAxis);

// svg.append("g")
//   .call(grid);

svg.append('rect')
  .attr('x', margin.left)
  .attr('y', margin.top)
  .attr('width', width - margin.left - margin.right)
  .attr('height', height - margin.top - margin.bottom)
  .attr('stroke', '#999')
  .attr('stroke-width', 1)
  .attr('fill', 'none')

svg
  .append('g')
  .attr('stroke', 'steelblue')
  .attr('stroke-width', 1.5)
  .attr('fill', 'none')
  .selectAll('circle')
  .data(proj)
  .join('circle')
  .attr('cx', (d) => x(d[0]))
  .attr('cy', (d) => y(d[1]))
  .attr('r', 3)
