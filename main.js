// Start coding and relax :)
console.clear()

function CSVToJson(str) {
	const newLineSeparator = str.split('\n')
	const keys = newLineSeparator.shift().split(/,|;/g)
	const result = []
	newLineSeparator.forEach((item, index) => {
		const newObj = {}
		newObj[keys[0]] = item.split(/,|;/g).join('')[0]
		newObj[keys[1]] = item.split(/,|;/g).join('')[1]
		result.push(newObj)
	})
	console.log(result)
	// return newLineSeparator
}

CSVToJson('col1,col2\na,b\nc,d\na,d')
// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
CSVToJson('col1;col2\na;b\nc;d', ';')
// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

