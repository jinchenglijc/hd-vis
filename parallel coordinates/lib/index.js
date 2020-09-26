// 问题
// selectedId是sort过的，但是经过多次reorder，怎么能说明最左端的id最小，最右端的id最大呢？
// dims[selectedId[selectedId.length - 1] + 1]也不一定是right aggregation右端的一个axis

const margin = {top: 30, right: 40, bottom: 10, left: 40}
// const width = document.body.clientWidth - margin.left - margin.right
// const height = document.body.clientHeight - margin.top - margin.bottom
const width = document.getElementById('PCPs').clientWidth - margin.left - margin.right
const height = document.getElementById('PCPs').clientHeight - margin.top - margin.bottom
const pcpViewHeight = height

const svg = d3
	.select('#PCPs')
	.append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

const frame = svg.append('rect')
	.attr('class', 'frame')
	.attr('x', 0)
	.attr('y', 0)
	.attr('width', width)
	.attr('height', pcpViewHeight)

const dims = Object.keys(data[0])
let existedDims = JSON.parse(JSON.stringify(dims))

const array = getDataArray(data, dims)
const extent = getDataExtent(array)
const distCorrelationMatrix = getDistCorrelationMatrix(array, extent)
// const distCorrelationMatrix = [[0.0, 0.08536155395452164, 0.5020935979450586, 0.10475291229733684, 0.12819493115090852, 0.05134978338077889, 0.9813483064405564, 0.14072081759186952, 0.059986045614983496], [0.08536155395452164, 0.0, 0.466641201625198, 0.11763765478449628, 0.0871473853498138, 0.06960755638193483, 0.9652383076649506, 0.11567830115582321, 0.10307758664391421], [0.5020935979450586, 0.466641201625198, 0.0, 0.4598483978548482, 0.4272243056678015, 0.5059920561404119, 0.5515359870759957, 0.43215171190195584, 0.5249295664795486], [0.10475291229733684, 0.11763765478449628, 0.4598483978548482, 0.0, 0.11521288833334276, 0.11247826815219263, 0.9313042859667338, 0.12034128783461907, 0.11185880790150261], [0.12819493115090852, 0.0871473853498138, 0.4272243056678015, 0.11521288833334276, 0.0, 0.11180087686494533, 0.9228960207024881, 0.11115957229582293, 0.14220798572700558], [0.05134978338077889, 0.06960755638193483, 0.5059920561404119, 0.11247826815219263, 0.11180087686494533, 0.0, 0.9968093032099344, 0.14554389858462888, 0.05223699077571864], [0.9813483064405564, 0.9652383076649506, 0.5515359870759957, 0.9313042859667338, 0.9228960207024881, 0.9968093032099344, 0.0, 0.9030946029037287, 1.0], [0.14072081759186952, 0.11567830115582321, 0.43215171190195584, 0.12034128783461907, 0.11115957229582293, 0.14554389858462888, 0.9030946029037287, 0.0, 0.15272418607838462], [0.059986045614983496, 0.10307758664391421, 0.5249295664795486, 0.11185880790150261, 0.14220798572700558, 0.05223699077571864, 1.0, 0.15272418607838462, 0.0]]

const x = d3
	.scalePoint()
	.domain(existedDims)
	.range([0, width])
let y = {}
extent.forEach((d, i) => {
	y[dims[i]] = d3
		.scaleLinear()
		.domain(d)
		.range([pcpViewHeight, 0])
})

const line = d3.line()
const axis = d3.axisLeft()
const axisRight = d3.axisRight()

const colorExtent = getExtentIn2dArray(distCorrelationMatrix)
const colorScale = d3
	.scaleLinear()
	.domain(getExtentIn2dArray(distCorrelationMatrix))
if (colorExtent[0] >= 0.3) {
	colorScale.range([colorExtent[0] - 0.3, colorExtent[1]])
} else if (colorExtent[1] <= 0.9) {
	colorScale.range([colorExtent[0], 0.9])
} else {
	colorScale.range([colorExtent[0], colorExtent[1]])
}

let dimDraggingDict = {}
let axesBrushingDict = {}
let selectedId = []
let aggregateDict = []

let background = svg
	.append('g')
	.attr('class', 'background')
	.selectAll('path')
	.data(data)
	.enter()
	.append('path')
	.attr('d', d => path(existedDims, d))

let foreground = svg
	.append('g')
	.attr('class', 'foreground')
	.selectAll('path')
	.data(data)
	.enter()
	.append('path')
	.attr('d', d => path(existedDims, d))
	// .attr('clip-path', 'url(#clipPath)')

// foreground.attr('clip-path', 'none')

const dimG = svg
	.selectAll('.dim')
	.data(dims)
	.enter()
	.append('g')
	.attr('class', 'dim')
	.attr('id', (d, i) => 'dim' + i)
	.attr('transform', d => 'translate(' + x(d) + ')')
	.call(d3.drag()
			.on('start', dimDragStart)
			.on('drag', dimDrag)
			.on('end', dimDragEnd))
dimG
	.append('g')
	.attr('class', 'axis')
	.each(function (d) { d3.select(this).call(axis.scale(y[d])) })
	.append('text')
	.style('text-anchor', 'middle')
	.attr('y', -9)
	.text(d => d)

// assign id to each axis
Object.keys(document.getElementsByClassName('axis')).forEach((d, i) => { 
	document.getElementsByClassName('axis')[d].id = 'axis' + i 
})

dimG
	.append('g')
	.attr('class', 'brush')
	.attr('id', (d, i) => 'brush' + i)
	.each(function (d) {
		d3.select(this).call(
			d.brush = d3
				.brushY()
				.extent([[-10, 0], [10, pcpViewHeight]])
				.on('start', axisBrushStart)
				.on('brush', axisBrush)
				.on('end', axisBrush)
		)
	})
	.selectAll('rect')
	.attr('x', -8)
	.attr('width', 16)

const axes = svg.selectAll('.axis')

var lasso_start = function () {
    lasso.items()
        .classed('not_possible',true)
        .classed('selected',false)

    selectedId = []
}

var lasso_draw = function () {

    // Style the possible dots
    lasso.possibleItems()
        .classed('not_possible',false)
        .classed('possible',true)

    // Style the not possible dot
    lasso.notPossibleItems()
        .classed('not_possible',true)
        .classed('possible',false)
}

var lasso_end = function () {
    // Reset the color of all dots
    lasso.items()
        .classed('not_possible',false)
        .classed('possible',false)

    // Style the selected dots
    lasso.selectedItems()
        .classed('selected',true)

    // 找出所有被lasso选中axes的id  --> 其实可以用lasso.selectedItems()
	// Object.keys(document.getElementsByClassName('selected')).forEach((d, i) => { 
	// 	console.log(document.getElementsByClassName('selected')[d].id) 
	// })
	lasso.selectedItems()._groups[0].forEach(d => 
		selectedId.push(Number(d.id.substring('axis'.length, 'axis'.length + 1)))
	)
	selectedId = selectedId.sort()
}

var lasso = d3.lasso()
    .closePathSelect(true)
    .closePathDistance(100)
    .items(axes)
    .targetArea(svg)
    .on('start',lasso_start)
    .on('draw',lasso_draw)
    .on('end',lasso_end)

svg.call(lasso)

let allDeleteDims = []

d3.select('#leftAggregate').on('click', aggregateAxes)
d3.select('#rightAggregate').on('click', aggregateAxes)

function dimDragStart (d) {
	dimDraggingDict[d] = x(d)
	d3
		.select('.background')
		.selectAll('path')
		.attr('visibility', 'hidden')
}

function dimDrag (d) {
	dimDraggingDict[d] = Math.min(width, Math.max(0, d3.event.x))
	d3
		.select('.foreground')
		.selectAll('path')
		.attr('d', d => path(existedDims, d))
	// foreground.attr('d', d => path(existedDims, d))
	existedDims.sort((a, b) => position(a) - position(b))
	x.domain(existedDims)
	d3.selectAll('.dim').attr('transform', d => 'translate(' + position(d) + ')')
}

function dimDragEnd (d) {
	delete dimDraggingDict[d]
	transition(d3.select(this)).attr('transform', 'translate(' + x(d) + ')')
	transition(d3
		.select('.foreground')
		.selectAll('path')).attr('d', d => path(existedDims, d))
	d3
		.select('.background')
		.selectAll('path')
		.attr('d', d => path(existedDims, d))
		.transition()
		.delay(500)
		.duration(0)
		.attr('visibility', null)
}

function transition(g) {
  return g.transition().duration(500)
}

function axisBrushStart (d) {
	d3.event.sourceEvent.stopPropagation()
}

function axisBrush (d) {
	let actives = []
	let range = []
	svg
		.selectAll('.brush')
		.filter(function () {
			return d3.brushSelection(this)
		})
		.each(function (d) {
			actives.push(d)
			range.push(d3.brushSelection(this))
		})

	d3
		.select('.foreground')
		.selectAll('path')
		.style('display', function (d, i) {
			let flag = actives.every(function (p, j) { //forEach不行
				return range[j][0] <= y[p](d[p]) && y[p](d[p]) <= range[j][1]
			}) ? null : 'none'

			for (let k = 0; k < aggregateDict.length; k++) {
				d3.selectAll('.SPLOMsCell' + k)._groups[0].forEach(d0 => {
					if (flag === null) {
						d3.select(d3.select(d0).selectAll('circle')._groups[0][i]).classed('hidden', false)
					} else {
						d3.select(d3.select(d0).selectAll('circle')._groups[0][i]).classed('hidden', true)	
					}
				})
			}

			return flag
		})
}

function position (d) {
	let v = dimDraggingDict[d]
	return typeof v === 'undefined' ? x(d) : v
}

function path (existedDims, d) {
	return line(existedDims.map(p => [position(p), y[p](d[p])]))
}

// 避免遮挡重画左右两侧axis，同时把最右侧轴朝向由left改为right
// 直接重画dim怎么样？很好啊
function resetLeftAndRightmostAxis (leftmostId, rightmostId) {
	d3.select('#dim' + leftmostId).remove()
	d3.select('#dim' + rightmostId).remove()

	svg
		.selectAll('#dim' + leftmostId)
		.data([dims[leftmostId]])
		.enter()
		.append('g')
		.attr('class', 'dim')
		.attr('id', 'dim' + leftmostId)
		.attr('transform', d => 'translate(' + x(d) + ')')
		.call(d3.drag()
			.on('start', dimDragStart)
			.on('drag', dimDrag)
			.on('end', dimDragEnd))

	d3
		.select('#dim' + leftmostId)
		.append('g')
		.attr('class', 'axis')
		.attr('id', 'axis' + leftmostId)
		.call(axis.scale(y[dims[leftmostId]]))
		.append('text')
		.style('text-anchor', 'middle')
		.attr('y', -9)
		.text(d => d)

	d3
		.select('#dim' + leftmostId)
		.append('g')
		.attr('class', 'brush')
		.attr('id', 'brush' + leftmostId)
		.call(d3
				.brushY()
				.extent([[-10, 0], [10, pcpViewHeight]])
				.on('start', axisBrushStart)
				.on('brush', axisBrush)
				.on('end', axisBrush)
		)
		.selectAll('rect')
		.attr('x', -8)
		.attr('width', 16)

	svg
		.selectAll('#dim' + rightmostId)
		.data([dims[rightmostId]])
		.enter()
		.append('g')
		.attr('class', 'dim')
		.attr('id', 'dim' + rightmostId)
		.attr('transform', d => 'translate(' + x(d) + ')')
		.call(d3.drag()
			.on('start', dimDragStart)
			.on('drag', dimDrag)
			.on('end', dimDragEnd))

	d3
		.select('#dim' + rightmostId)
		.append('g')
		.attr('class', 'axis')
		.attr('id', 'axis' + rightmostId)
		.call(axisRight.scale(y[dims[rightmostId]]))
		.append('text')
		.style('text-anchor', 'start')
		.attr('y', -9)
		.text(d => d)

	d3
		.select('#dim' + rightmostId)
		.append('g')
		.attr('class', 'brush')
		.attr('id', 'brush' + rightmostId)
		.call(d3
				.brushY()
				.extent([[-10, 0], [10, pcpViewHeight]])
				.on('start', axisBrushStart)
				.on('brush', axisBrush)
				.on('end', axisBrush)
		)
		.selectAll('rect')
		.attr('x', -8)
		.attr('width', 16)
}

function aggregateAxes (p) {
	if (selectedId.length === 0) {
		alert('Please Select Axes For Aggergation!')
		return
	}

	const clickId = d3.select(this).attr('id')
	const axesInterval = x(existedDims[1]) - x(existedDims[0])
	const selectedInterval = selectedId.length * axesInterval
	const movingDiff = (selectedInterval - axesInterval) / 2
	const preXRange = x.range()
	
	if (clickId === 'leftAggregate') {
		if (selectedId[0] === 0) {
			alert('Left Aggregation Not Allowed!')
			return
		}

		dims.forEach((dim, i) => {
			if (selectedId.indexOf(i) !== -1 && selectedId.indexOf(i) !== selectedId.length - 1) {
				existedDims.remove(dim)
			}
		})

		let SPLOMsDims = []
		SPLOMsDims.push(dims[selectedId[0] - 1])
		selectedId.forEach(d => {
			SPLOMsDims.push(dims[d])
		})

		let deleteDims = []
		SPLOMsDims.forEach((d, i) => {
			if (i !== 0 && i !== SPLOMsDims.length - 1) {
				deleteDims.push(d)
				allDeleteDims.push(d)
			}
		})

		let currData = JSON.parse(JSON.stringify(data))
		currData.forEach(d => {
			allDeleteDims.forEach(dim => {
				return delete d[dim]
			})
		})
		
		aggregateDict.push({
			selectedId: selectedId,
			existedDims: existedDims,
			deleteDims: deleteDims,
			currData: currData,
			preXRange: preXRange
		})

		aggregateDict[aggregateDict.length - 1].id = aggregateDict.length === 1 ? 0 : aggregateDict[aggregateDict.length - 2].id + 1

		x.domain(existedDims)
		x.range([preXRange[0] + movingDiff, preXRange[1] - movingDiff])

		d3.selectAll('.dim')._groups[0].forEach(d => {
			let dimId = Number(d3.select(d).attr('id').substring('dim'.length, 'dim'.length + 1))
			if (existedDims.indexOf(dims[dimId]) === -1) {
				d3.select(d).remove()
			} else {
				d3.select(d).attr('transform', p => 'translate(' + x(p) + ')')
			}
		})

		// 移动已经存在的SPLOMs和用于遮挡polyline的rect
		for (let i = 0; i < d3.selectAll('.SPLOMsG')._groups[0].length; i++) {
			// let currX = Number(d3.select('#SPLOMsG0').attr('transform').substring('translate('.length, d3.select('#SPLOMsG0').attr('transform').indexOf(',')))
			let SPLOMs = aggregateDict[i].SPLOMs
			// d3.select('#SPLOMsG' + i).attr('transform', 'translate(' + ((Math.max(SPLOMs.width, SPLOMs.height) - Math.min(SPLOMs.width, SPLOMs.height)) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')')
			d3.select('#SPLOMsG' + i).attr('transform', () => {
				if (SPLOMs.height > SPLOMs.width) {
					return 'translate(' + x(SPLOMs.dims[0]) + ',' + (SPLOMs.padding / 2 + (SPLOMs.height - SPLOMs.width) / 2) + ')'
				} else {
					return 'translate(' + ((SPLOMs.width - SPLOMs.height) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')'
				}
			})
			d3.select('#clipRect' + i).attr('x', x(SPLOMs.dims[0]))
		}

		d3.selectAll('.foreground path').remove()
		d3.selectAll('.background path').remove()

		d3
			.select('.background')
			.selectAll('path')
			.data(currData)
			.enter()
			.append('path')
			.attr('d', d => path(existedDims, d))

		d3
			.select('.foreground')
			.selectAll('path')
			.data(currData)
			.enter()
			.append('path')
			.attr('d', d => path(existedDims, d))

		// 用rect遮挡SPLOMs部分的polyline
		svg.append('rect')
			.attr('class', 'clipRect')
			.attr('id', 'clipRect' + aggregateDict[aggregateDict.length - 1].id)
			.attr('x', x(SPLOMsDims[0]))
			.attr('y', -0.5)
			.attr('width', Math.abs(x(SPLOMsDims[SPLOMsDims.length - 1]) - x(SPLOMsDims[0])))
			.attr('height', pcpViewHeight + 1)
			.on('click', undoClick)
			.on('contextmenu', toggleGlyphSPLOMs)
		//rect临近的两个axis可能被遮挡住一部分，重画就好了
		resetLeftAndRightmostAxis(selectedId[0] - 1, selectedId[selectedId.length - 1])

		// 绘制SPLOMs
		aggregateDict[aggregateDict.length - 1].SPLOMs = {
			dims: SPLOMsDims,
			width: x(existedDims[1]) - x(existedDims[0]),
			height: pcpViewHeight,
			padding: 6,
			n: SPLOMsDims.length,
			type: 0 // 0代表SPLOMs，1代表glyph SPLOMs
		}

		let SPLOMs = aggregateDict[aggregateDict.length - 1].SPLOMs
		SPLOMs.size = (Math.min(SPLOMs.width, SPLOMs.height) - SPLOMs.padding) / SPLOMs.n
		SPLOMs.x = d3.scaleLinear().range([SPLOMs.padding / 2, SPLOMs.size - SPLOMs.padding / 2])
		SPLOMs.y = d3.scaleLinear().range([SPLOMs.size - SPLOMs.padding / 2, SPLOMs.padding / 2])
		let SPLOMsXAxis = d3.axisBottom().scale(SPLOMs.x)
		let SPLOMsYAxis = d3.axisLeft().scale(SPLOMs.y)

		let SPLOMsBrush = d3
			.brush()
			.on('start', SPLOMsBrushstart)
			.on('brush', SPLOMsBrushmove)
			.on('end', SPLOMsBrushend)
			.extent([[0, 0], [SPLOMs.size, SPLOMs.size]])

		let SPLOMsG = svg
			.append('g')
			.attr('class', 'SPLOMsG')
			.attr('id', 'SPLOMsG' + aggregateDict[aggregateDict.length - 1].id)
			// .attr('transform', 'translate(' + ((Math.max(SPLOMs.width, SPLOMs.height) - Math.min(SPLOMs.width, SPLOMs.height)) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')')
			.attr('transform', () => {
				if (SPLOMs.height > SPLOMs.width) {
					return 'translate(' + x(SPLOMs.dims[0]) + ',' + (SPLOMs.padding / 2 + (SPLOMs.height - SPLOMs.width) / 2) + ')'
				} else {
					return 'translate(' + ((SPLOMs.width - SPLOMs.height) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')'
				}
			})

		let SPLOMsCell = SPLOMsG
			.selectAll('.SPLOMsCell' + aggregateDict[aggregateDict.length - 1].id)
			.data(cross(SPLOMs.dims, SPLOMs.dims))
			.enter()
			.append('g')
			.attr('class', 'SPLOMsCell' + aggregateDict[aggregateDict.length - 1].id)
			.attr('transform', function (d) {
				return 'translate(' + (SPLOMs.n - d.i - 1) * SPLOMs.size + ',' + d.j * SPLOMs.size + ')'
			})
			.each(plot)

		SPLOMsCell.call(SPLOMsBrush)

		SPLOMsCell
			.filter(d => d.i === d.j)
			.append('text')
			.attr('x', SPLOMs.padding)
			.attr('y', SPLOMs.padding)
			.attr('dy', '.71em')
			.style('fill', 'black')
			.text(d => d.x)

		let SPLOMsBrushCell

		function SPLOMsBrushstart(p) {
			if (SPLOMsBrushCell !== this) {
				d3.select(SPLOMsBrushCell).call(SPLOMsBrush.move, null)
				SPLOMsBrushCell = this
				const SPLOMs = aggregateDict[Number(d3.select(SPLOMsBrushCell).attr('class').substring('SPLOMsCell'.length, 'SPLOMsCell'.length + 1))].SPLOMs
				SPLOMs.x.domain(extent[dims.indexOf(p.x)])
				SPLOMs.y.domain(extent[dims.indexOf(p.y)])
			}
		}

		// Highlight the selected circles.
		function SPLOMsBrushmove(p) {
			let e = d3.brushSelection(this)
			let flag
			const SPLOMsGId = aggregateDict[Number(d3.select(this).attr('class').substring('SPLOMsCell'.length, 'SPLOMsCell'.length + 1))].id
			const SPLOMs = aggregateDict[Number(d3.select(this).attr('class').substring('SPLOMsCell'.length, 'SPLOMsCell'.length + 1))].SPLOMs	
			d3.select('#SPLOMsG' + SPLOMsGId).selectAll('circle').classed('hidden', function (d, i) {
				flag = !e
					? false
					: e[0][0] > SPLOMs.x(+d[p.x]) ||
							SPLOMs.x(+d[p.x]) > e[1][0] ||
							e[0][1] > SPLOMs.y(+d[p.y]) ||
							SPLOMs.y(+d[p.y]) > e[1][1]

				for (let j = 0; j < aggregateDict.length; j++) {
					if (j !== SPLOMsGId) {
						if (flag === true) {
							d3.select(d3.select('#SPLOMsG' + j).selectAll('circle')._groups[0][i]).classed('hidden', true)
						} else {
							d3.select(d3.select('#SPLOMsG' + j).selectAll('circle')._groups[0][i]).classed('hidden', false)
						}
					}
				}

				// PCPs要联动
				if (i < data.length && flag === true) {
					d3.select(d3.select('.foreground').selectAll('path')._groups[0][i]).style('display', 'none')
				} else if (i < data.length && flag === false) {
					d3.select(d3.select('.foreground').selectAll('path')._groups[0][i]).style('display', null)
				}

				return flag
			})
		}

		// If the brush is empty, select all circles and all foreground paths.
		function SPLOMsBrushend() {
			let e = d3.brushSelection(this)
			if (e === null) {
				d3.selectAll(".hidden").classed("hidden", false)
				d3.select('.foreground').selectAll('path').style('display', null)
			}
		}

	} else if (clickId === 'rightAggregate') {
		if (selectedId[selectedId.length - 1] === dims.length - 1) {
			alert('Right Aggregation Not Allowed!')
			return
		}

		dims.forEach((dim, i) => {
			if (selectedId.indexOf(i) !== -1 && selectedId.indexOf(i) !== 0) {
				existedDims.remove(dim)
			}
		})

		// 对于right aggregation，要注意这里的顺序
		let SPLOMsDims = []
		selectedId.forEach(d => {
			SPLOMsDims.push(dims[d])
		})
		SPLOMsDims.push(dims[selectedId[selectedId.length - 1] + 1])

		let deleteDims = []
		SPLOMsDims.forEach((d, i) => {
			if (i !== 0 && i !== SPLOMsDims.length - 1) {
				deleteDims.push(d)
				allDeleteDims.push(d)
			}
		})

		let currData = JSON.parse(JSON.stringify(data))
		currData.forEach(d => {
			allDeleteDims.forEach(dim => {
				return delete d[dim]
			})
		})

		aggregateDict.push({
			selectedId: selectedId,
			existedDims: existedDims,
			deleteDims: deleteDims,
			currData: currData,
			preXRange: preXRange
		})

		aggregateDict[aggregateDict.length - 1].id = aggregateDict.length === 1 ? 0 : aggregateDict[aggregateDict.length - 2].id + 1

		x.domain(existedDims)
		x.range([preXRange[0] + movingDiff, preXRange[1] - movingDiff])

		d3.selectAll('.dim')._groups[0].forEach(d => {
			let dimId = Number(d3.select(d).attr('id').substring('dim'.length, 'dim'.length + 1))
			if (existedDims.indexOf(dims[dimId]) === -1) {
				d3.select(d).remove()
			} else {
				d3.select(d).attr('transform', p => 'translate(' + x(p) + ')')
			}
		})

		// 移动已经存在的SPLOMs和用于遮挡polyline的rect
		for (let i = 0; i < d3.selectAll('.SPLOMsG')._groups[0].length; i++) {
			// let currX = Number(d3.select('#SPLOMsG0').attr('transform').substring('translate('.length, d3.select('#SPLOMsG0').attr('transform').indexOf(',')))
			let SPLOMs = aggregateDict[i].SPLOMs
			// d3.select('#SPLOMsG' + i).attr('transform', 'translate(' + ((Math.max(SPLOMs.width, SPLOMs.height) - Math.min(SPLOMs.width, SPLOMs.height)) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')')
			d3.select('#SPLOMsG' + i).attr('transform', () => {
				if (SPLOMs.height > SPLOMs.width) {
					return 'translate(' + x(SPLOMs.dims[0]) + ',' + (SPLOMs.padding / 2 + (SPLOMs.height - SPLOMs.width) / 2) + ')'
				} else {
					return 'translate(' + ((SPLOMs.width - SPLOMs.height) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')'
				}
			})
			d3.select('#clipRect' + i).attr('x', x(SPLOMs.dims[0]))
		}

		d3.selectAll('.foreground path').remove()
		d3.selectAll('.background path').remove()

		d3
			.select('.background')
			.selectAll('path')
			.data(currData)
			.enter()
			.append('path')
			.attr('d', d => path(existedDims, d))

		d3
			.select('.foreground')
			.selectAll('path')
			.data(currData)
			.enter()
			.append('path')
			.attr('d', d => path(existedDims, d))

		// 用rect遮挡SPLOMs部分的polyline
		svg.append('rect')
			.attr('class', 'clipRect')
			.attr('id', 'clipRect' + aggregateDict[aggregateDict.length - 1].id)
			.attr('x', x(SPLOMsDims[0]))
			.attr('y', -0.5)
			.attr('width', Math.abs(x(SPLOMsDims[SPLOMsDims.length - 1]) - x(SPLOMsDims[0])))
			.attr('height', pcpViewHeight + 1)
			.on('click', undoClick)
			.on('contextmenu', toggleGlyphSPLOMs)
		//rect临近的两个axis可能被遮挡住一部分，重画就好了
		// 对于right aggregation，依然是左侧的左偏，右侧的右偏
		resetLeftAndRightmostAxis(selectedId[selectedId.length - 1] + 1, selectedId[0])
		// resetLeftAndRightmostAxis(selectedId[0], selectedId[selectedId.length - 1] + 1)

		// 绘制SPLOMs
		aggregateDict[aggregateDict.length - 1].SPLOMs = {
			dims: SPLOMsDims,
			width: x(existedDims[1]) - x(existedDims[0]),
			height: pcpViewHeight,
			padding: 6,
			n: SPLOMsDims.length,
			type: 0 // 0代表SPLOMs，1代表glyph SPLOMs
		}

		let SPLOMs = aggregateDict[aggregateDict.length - 1].SPLOMs
		SPLOMs.size = (Math.min(SPLOMs.width, SPLOMs.height) - SPLOMs.padding) / SPLOMs.n
		SPLOMs.x = d3.scaleLinear().range([SPLOMs.padding / 2, SPLOMs.size - SPLOMs.padding / 2])
		SPLOMs.y = d3.scaleLinear().range([SPLOMs.size - SPLOMs.padding / 2, SPLOMs.padding / 2])
		let SPLOMsXAxis = d3.axisBottom().scale(SPLOMs.x)
		let SPLOMsYAxis = d3.axisLeft().scale(SPLOMs.y)

		let SPLOMsBrush = d3
			.brush()
			.on('start', SPLOMsBrushstart)
			.on('brush', SPLOMsBrushmove)
			.on('end', SPLOMsBrushend)
			.extent([[0, 0], [SPLOMs.size, SPLOMs.size]])

		let SPLOMsG = svg
			.append('g')
			.attr('class', 'SPLOMsG')
			.attr('id', 'SPLOMsG' + aggregateDict[aggregateDict.length - 1].id)
			// .attr('transform', 'translate(' + ((Math.max(SPLOMs.width, SPLOMs.height) - Math.min(SPLOMs.width, SPLOMs.height)) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')')
			.attr('transform', () => {
				if (SPLOMs.height > SPLOMs.width) {
					return 'translate(' + x(SPLOMs.dims[0]) + ',' + (SPLOMs.padding / 2 + (SPLOMs.height - SPLOMs.width) / 2) + ')'
				} else {
					return 'translate(' + ((SPLOMs.width - SPLOMs.height) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')'
				}
			})

		let SPLOMsCell = SPLOMsG
			.selectAll('.SPLOMsCell' + aggregateDict[aggregateDict.length - 1].id)
			.data(cross(SPLOMs.dims, SPLOMs.dims))
			.enter()
			.append('g')
			.attr('class', 'SPLOMsCell' + aggregateDict[aggregateDict.length - 1].id)
			.attr('transform', function (d) {
				return 'translate(' + (SPLOMs.n - d.i - 1) * SPLOMs.size + ',' + d.j * SPLOMs.size + ')'
			})
			.each(plot)

		SPLOMsCell.call(SPLOMsBrush)

		SPLOMsCell
			.filter(d => d.i === d.j)
			.append('text')
			.attr('x', SPLOMs.padding)
			.attr('y', SPLOMs.padding)
			.attr('dy', '.71em')
			.style('fill', 'black')
			.text(d => d.x)

		let SPLOMsBrushCell

		function SPLOMsBrushstart(p) {
			if (SPLOMsBrushCell !== this) {
				d3.select(SPLOMsBrushCell).call(SPLOMsBrush.move, null)
				SPLOMsBrushCell = this
				const SPLOMs = aggregateDict[Number(d3.select(SPLOMsBrushCell).attr('class').substring('SPLOMsCell'.length, 'SPLOMsCell'.length + 1))].SPLOMs
				SPLOMs.x.domain(extent[dims.indexOf(p.x)])
				SPLOMs.y.domain(extent[dims.indexOf(p.y)])
			}
		}

		// Highlight the selected circles.
		function SPLOMsBrushmove(p) {
			let e = d3.brushSelection(this)
			let flag
			const SPLOMsGId = aggregateDict[Number(d3.select(this).attr('class').substring('SPLOMsCell'.length, 'SPLOMsCell'.length + 1))].id
			const SPLOMs = aggregateDict[Number(d3.select(this).attr('class').substring('SPLOMsCell'.length, 'SPLOMsCell'.length + 1))].SPLOMs	
			d3.select('#SPLOMsG' + SPLOMsGId).selectAll('circle').classed('hidden', function (d, i) {
				flag = !e
					? false
					: e[0][0] > SPLOMs.x(+d[p.x]) ||
							SPLOMs.x(+d[p.x]) > e[1][0] ||
							e[0][1] > SPLOMs.y(+d[p.y]) ||
							SPLOMs.y(+d[p.y]) > e[1][1]

				for (let j = 0; j < aggregateDict.length; j++) {
					if (j !== SPLOMsGId) {
						if (flag === true) {
							d3.select(d3.select('#SPLOMsG' + j).selectAll('circle')._groups[0][i]).classed('hidden', true)
						} else {
							d3.select(d3.select('#SPLOMsG' + j).selectAll('circle')._groups[0][i]).classed('hidden', false)
						}
					}
				}

				// PCPs要联动
				if (i < data.length && flag === true) {
					d3.select(d3.select('.foreground').selectAll('path')._groups[0][i]).style('display', 'none')
				} else if (i < data.length && flag === false) {
					d3.select(d3.select('.foreground').selectAll('path')._groups[0][i]).style('display', null)
				}

				return flag
			})
		}

		// If the brush is empty, select all circles and all foreground paths.
		function SPLOMsBrushend() {
			let e = d3.brushSelection(this)
			if (e === null) {
				d3.selectAll(".hidden").classed("hidden", false)
				d3.select('.foreground').selectAll('path').style('display', null)
			}
		}
	}

}

function cross(a, b) {
	let c = []
	const n = a.length
	const m = b.length
	for (let i = -1; ++i < n; ) {
		for (let j = -1; ++j < m; ) {
			c.push({ x: a[i], i: i, y: b[j], j: j })
		}
	}
	return c
}

function plot(p) {
	const cell = d3.select(this)
	const SPLOMs = aggregateDict[aggregateDict.length - 1].SPLOMs

	SPLOMs.x.domain(extent[dims.indexOf(p.x)])
	SPLOMs.y.domain(extent[dims.indexOf(p.y)])

	cell
		.append('rect')
		.attr('class', 'SPLOMsFrame')
		.attr('x', SPLOMs.padding / 2)
		.attr('y', SPLOMs.padding / 2)
		.attr('width', SPLOMs.size - SPLOMs.padding)
		.attr('height', SPLOMs.size - SPLOMs.padding)

	cell
		.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', d => SPLOMs.x(d[p.x]))
		.attr('cy', d => SPLOMs.y(d[p.y]))
		.attr('r', 1)
}

let clickTimer = null; //used to distinguish click from double-click

function undoClick () {
	clearTimeout(clickTimer)
	const clipRectId = Number(d3.select(this).attr('id').substring('clipRect'.length, 'clipRect'.length + 1))
	if (event.detail == 2) {
		undoSPLOMs(clipRectId)
		return
	}
	clickTimer = setTimeout(function () {
		console.log('click')
	}, 300)
}

// 1. 恢复existedDims
// 2. 更改aggregateDict，对该数组中其他元素也有影响，比如其中的existedDims
// 2. 恢复x()
// 3. 恢复.dim，包括更改SPLOMs右端.dim的axis朝向
// 4. 恢复transform
// 5. 重画.foreground path和.background path
function undoSPLOMs (clipRectId) {
	clearTimeout(clickTimer)
	let dict = null
	let dictOrder = null // 如果后创建的SPLOMs后被remove，那么此时这个order已经不等于clipRect的id了！
	for (let i = 0; i < aggregateDict.length; i++) {
		if (aggregateDict[i].id === clipRectId) {
			dict = aggregateDict[i]
			dictOrder = i
			break
		}
	}

	const axesInterval = x(existedDims[1]) - x(existedDims[0])
	const deletedInterval = dict.deleteDims.length * axesInterval
	const movingDiff = deletedInterval / 2
	const preXRange = x.range()

	for (let i = 0; i < dict.deleteDims.length; i++) {
		for (let j = 0; j < existedDims.length; j++) {
			if (dims.indexOf(existedDims[j]) > dims.indexOf(dict.deleteDims[i])) {
				existedDims.splice(j, 0, dict.deleteDims[i])
				break
			}
		}
		allDeleteDims.remove(dict.deleteDims[i])
	}

	// for (let i = clipRectId + 1; i < aggregateDict.length; i++) {
	// 	aggregateDict[i]
	// }

	let currData = JSON.parse(JSON.stringify(data))
	currData.forEach(d => {
		allDeleteDims.forEach(dim => {
			return delete d[dim]
		})
	})

	x.domain(existedDims)
	x.range([preXRange[0] - movingDiff, preXRange[1] + movingDiff])

	// 重新append不存在的.dim，移动已经存在的.dim，将SPLOMs右侧的.dim的axis朝向改变
	existedDims.forEach(dim => {
		let dimId = dims.indexOf(dim)

		if (document.getElementById('dim' + dims.indexOf(dim)) === null ||
			aggregateDict[dictOrder].SPLOMs.dims[aggregateDict[dictOrder].SPLOMs.dims.length - 1] === dim) {
			svg.select('#dim' + dimId).remove()

			svg
				.selectAll('#dim' + dimId)
				.data([dims[dimId]])
				.enter()
				.append('g')
				.attr('class', 'dim')
				.attr('id', 'dim' + dimId)
				.attr('transform', d => 'translate(' + x(d) + ')')
				.call(d3.drag()
					.on('start', dimDragStart)
					.on('drag', dimDrag)
					.on('end', dimDragEnd))

			d3
				.select('#dim' + dimId)
				.append('g')
				.attr('class', 'axis')
				.attr('id', 'axis' + dimId)
				.call(axis.scale(y[dims[dimId]]))
				.append('text')
				.style('text-anchor', 'middle')
				.attr('y', -9)
				.text(d => d)

			d3
				.select('#dim' + dimId)
				.append('g')
				.attr('class', 'brush')
				.attr('id', 'brush' + dimId)
				.call(d3
						.brushY()
						.extent([[-10, 0], [10, pcpViewHeight]])
						.on('start', axisBrushStart)
						.on('brush', axisBrush)
						.on('end', axisBrush)
				)
				.selectAll('rect')
				.attr('x', -8)
				.attr('width', 16)
		} else {
			d3.select('#dim' + dimId).attr('transform', d => 'translate(' + x(d) + ')')
		}
	})

	// 去除此处的clipRect & SPLOMsG，移动其他地方的clipRect & SPLOMsG
	d3.select('#SPLOMsG' + clipRectId).remove()
	d3.select('#clipRect' + clipRectId).remove()
	for (let i = 0; i < d3.selectAll('.SPLOMsG')._groups[0].length + 1; i++) { // remove已经在上数两行发生，所以这里是length+1
		let SPLOMs = aggregateDict[i].SPLOMs
		if (aggregateDict[i].id !== clipRectId) {
			// d3.select('#SPLOMsG' + aggregateDict[i].id).attr('transform', 'translate(' + ((Math.max(SPLOMs.width, SPLOMs.height) - Math.min(SPLOMs.width, SPLOMs.height)) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')')
			d3.select('#SPLOMsG' + aggregateDict[i].id).attr('transform', () => {
				if (SPLOMs.height > SPLOMs.width) {
					return 'translate(' + x(SPLOMs.dims[0]) + ',' + (SPLOMs.padding / 2 + (SPLOMs.height - SPLOMs.width) / 2) + ')'
				} else {
					return 'translate(' + ((SPLOMs.width - SPLOMs.height) / 2 + x(SPLOMs.dims[0])) + ',' + SPLOMs.padding / 2 + ')'
				}
			})
			d3.select('#clipRect' + aggregateDict[i].id).attr('x', x(SPLOMs.dims[0]))
		}
	}

	d3.selectAll('.foreground path').remove()
	d3.selectAll('.background path').remove()

	d3
		.select('.background')
		.selectAll('path')
		.data(currData)
		.enter()
		.append('path')
		.attr('d', d => path(existedDims, d))

	d3
		.select('.foreground')
		.selectAll('path')
		.data(currData)
		.enter()
		.append('path')
		.attr('d', d => path(existedDims, d))

	aggregateDict.remove(aggregateDict[dictOrder])

	lasso.items(d3.selectAll('.axis'))
}

function toggleGlyphSPLOMs () {
	d3.event.preventDefault()
	const clipRectId = Number(d3.select(this).attr('id').substring('clipRect'.length, 'clipRect'.length + 1))
	let SPLOMs
	let dict
	let dictOrder
	for (let i = 0; i < aggregateDict.length; i++) {
		if (aggregateDict[i].id === clipRectId) {
			dict = aggregateDict[i]
			dictOrder = i
			SPLOMs = aggregateDict[i].SPLOMs
			break
		}
	}
	if (SPLOMs.type === 0) { // SPLOMs -> glyph SPLOMs
		SPLOMs.type = 1
		d3.select('#SPLOMsG' + clipRectId).selectAll('circle').attr('display', 'none')
		d3.select('#SPLOMsG' + clipRectId).selectAll('text').attr('display', 'none')
		if (d3.select('#SPLOMsG' + clipRectId).selectAll('.glyphRect')._groups[0].length === 0) {
			d3.selectAll('.SPLOMsCell' + clipRectId).each(function (d) { glyphRender(this, d, dictOrder) })
		} else {
			d3.select('#SPLOMsG' + clipRectId).selectAll('.glyphRect').attr('display', null)
		}
	} else { // glyph SPLOMs -> SPLOMs
		SPLOMs.type = 0
		d3.select('#SPLOMsG' + clipRectId).selectAll('circle').attr('display', null)
		d3.select('#SPLOMsG' + clipRectId).selectAll('text').attr('display', null)
		d3.select('#SPLOMsG' + clipRectId).selectAll('.glyphRect').attr('display', 'none')
	}
}

function glyphRender (self, d, dictOrder) {
	// 对所有的cell而言，d的顺序是从最右上至下，一列扫描完后去到左边的列
	let cell = d3.select(self)
	let SPLOMs = aggregateDict[dictOrder].SPLOMs

	// code的顺序是右上->左上->左下->右下
	let glyphCode = []
	for (let i = 0; i < glyphSPLOMsDict[dims.indexOf(d.x)][dims.indexOf(d.y)].code.length; i++) {
		glyphCode.push(Number(glyphSPLOMsDict[dims.indexOf(d.x)][dims.indexOf(d.y)].code[i]))
	}
	let glyphColor = glyphSPLOMsDict[dims.indexOf(d.x)][dims.indexOf(d.y)].color

	cell
		.selectAll('.glyphRect')
		.data(glyphCode)
		.enter()
		.append('rect')
		.attr('class', 'glyphRect')
		.attr('x', (p, i) => {
			if (i === 0 || i === 3) {
				return SPLOMs.padding / 2 + (SPLOMs.size - SPLOMs.padding) / 2
			} else {
				return SPLOMs.padding / 2
			}
		})
		.attr('y', (p, i) => {
			if (i === 0 || i === 1) {
				return SPLOMs.padding / 2
			} else {
				return SPLOMs.padding / 2 + (SPLOMs.size - SPLOMs.padding) / 2
			}
		})
		.attr('width', (SPLOMs.size - SPLOMs.padding) / 2)
		.attr('height', (SPLOMs.size - SPLOMs.padding) / 2)
		.style('fill', p => p === 0 ? 'white' : glyphColor )
		.style('opacity', function () {
			// console.log('???', d.x, d.y)
			if (d.x === d.y) {
				console.log('if', distCorrelationMatrix[dims.indexOf(d.x)][dims.indexOf(d.y)])
				return distCorrelationMatrix[dims.indexOf(d.x)][dims.indexOf(d.y)]
			} else {
				console.log('else', colorScale(distCorrelationMatrix[dims.indexOf(d.x)][dims.indexOf(d.y)]))
				return colorScale(distCorrelationMatrix[dims.indexOf(d.x)][dims.indexOf(d.y)])
			}
		})
}












