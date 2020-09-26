// let glyphCode = [
// 	[10, 5, 5, 5, 5, 11, 14],
// 	[5, 10, 10, 10, 10, 7, 13],
// 	[5, 10, 10, 10, 10, 7, 13],
// 	[5, 10, 10, 10, 10, 7, 15],
// 	[5, 10, 10, 10, 10, 7, 15],
// 	[14, 7, 7, 7, 7, 10, 14],
// 	[11, 13, 13, 15, 15, 11, 10]
// ]
// 
let glyphCode = [[1, 5, 5, 5, 5, 11, 14], [5, 1, 10, 10, 10, 7, 13], [5, 10, 1, 10, 10, 7, 13], [5, 10, 10, 1, 10, 7, 15], [5, 10, 10, 10, 1, 7, 15], [14, 7, 7, 7, 7, 1, 14], [11, 13, 13, 15, 15, 11, 1]]

const existedCode = [14, 10, 11, 15, 7, 5, 13]
let glyphDict = [
	{
		class: 'YX',
		code: '1110', // 14
		color: '#32cd32'
	},
	{
		class: 'PC',
		code: '1010', // 10
		color: '#00bfff'
	},
	{
		class: 'XY',
		code: '1011', // 11
		color: '#663399'
	},
	{
		class: 'UNL',
		code: '1111', // 15
		color: 'black'
	},
	{
		class: 'MX',
		code: '0111', // 7
		color: '#990000'
	},
	{
		class: 'NC',
		code: '0101', // 5
		color: '#cc3300'
	},
	{
		class: 'OR',
		code: '1101', // 13
		color: '#ff9933'
	}
]

var glyphSPLOMsDict = glyphDecoder(glyphCode, glyphDict)

function glyphDecoder (glyphCode, glyphDict) {
	for (let i = 0; i < glyphCode.length; i++) {
		for (let j = 0; j < glyphCode[i].length; j++) {
			if (glyphCode[i][j] === 1) {
				glyphCode[i][j] = 10
			} else if (existedCode.indexOf(glyphCode[i][j]) === -1) {
				glyphCode[i][j] = 15
			}
		}
	}
	
	let glyphSPLOMsDict = []

	for (let i = 0; i < glyphCode.length; i++) {
		glyphSPLOMsDict[i] = []
		for (let j = 0; j < glyphCode[i].length; j++) {
			let binaryCode = parseInt(glyphCode[i][j]).toString(2)
			if (glyphCode[i][j] < 8) {
				binaryCode = '0' + binaryCode
			}
			for (let k = 0; k < glyphDict.length; k++) {
				if (binaryCode === glyphDict[k].code) {
					glyphSPLOMsDict[i][j] = {
						code: glyphDict[k].code,
						color: glyphDict[k].color
					}
				}
			}
		}
	}

	return glyphSPLOMsDict
}