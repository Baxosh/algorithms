console.clear()

strings = ['flower', 'flow', 'flight']
// strings = [1, 2, 3, 4, 5]

var longestCommonPrefix = function (strings) {
	const min = Math.min(...strings.map((item) => item.length))
	let arr = []
	let result
	for (let j = 0; j < min; j++) {
		for (let i = 1; i < strings.length; ++i) {
			if (strings[i - 1][j] === strings[i][j]) result += strings[i][j]
			if (i === 0) continue
		}
		if (result.length + 1 === strings.length) {
			arr.push(result)
		}
		result = ''
	}

	console.log(arr)
}

longestCommonPrefix(strings)

// strs.sort()
// 	for (let i = 0; i < strs[0].length; i++) {
// 		// if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i)
// 	}
// 	return strs[0]

// let result = ''
// 	const min = Math.min(...strings.map((item) => item.length)) || 0
// 	if (!min) return 'Array is empty!'
// 	for (let j = 0; j < min; j++) {
// 		result += ' '
// 		for (let i = 0; i < strings.length; ++i) {
// 			result += strings[i][j]
// 			if (i === 0) continue
// 			console.log(result.slice(-1) === strings[i][j])
// 			console.log('----------')
// 			console.log(strings[i][j])
// 		}
// 	}
