function makeStr(str) {
	let upper = 0
	let lower = 0

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			upper += 1
		}
		if (str[i] === str[i].toLowerCase()) {
			lower += 1
		}
	}

	if (upper > lower) {
		return str.toUpperCase()
	} else {
		return str.toLowerCase()
	}
}

console.log(makeStr('PHp'))
console.log(makeStr('pHp'))
console.log(makeStr('Php'))
