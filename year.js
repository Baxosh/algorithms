console.clear()

function yearBetween() {
	let i = 2014
	while (i <= 2050) {
		const date = new Date(i, 0, 1)
		if (date.getDay() === 0) console.log(i)
		i++
	}
}

function forChristmas() {
	const date = new Date()
	let month = date.getMonth()
	let leftDays = 0

	while (month < 12) {
		leftDays += new Date(2022, month, 0).getDate()
		month++
	}

	return `For next christmas ${leftDays - date.getDate()}`
}

console.log(forChristmas())
