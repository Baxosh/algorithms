console.clear()

function readablePrice(price) {
	if (typeof price !== 'string') return console.log('It\' not a string type!')

	return new Intl.NumberFormat('ru', {
		style: 'currency',
		currency: 'RUB'
	}).format(price)
}

console.log(readablePrice('59400000')) // 59 400 000
readablePrice('54321') // 5 940
