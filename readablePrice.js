console.clear()

function readablePrice(price) {
	let result = []

	// let i = price.length - 1
	// while (i >= 0) {
	// 	res.unshift(price[i])

	// 	if ((i + 1) % 3 === 0) {
	// 		res.unshift(' ')
	// 	}

	// 	i--
	// }
	
	
	
	
	// for (let i = 0; i <= price.length; i++) {
	// 	result.push(price[i])

	// 	if ((i + 1) % 3 === 0) {
	// 		result.push(' ')
	// 	}
	// }

	price
		.split('')
		.reverse()
		.map((item, index) =>
			(index + 1) % 3 === 0 ? result.push(' ' + item) : result.push(item)
		)

	console.log(result.reverse().join(''))
}

readablePrice('59400000') // 59 400 000
readablePrice('54321') // 5 940
