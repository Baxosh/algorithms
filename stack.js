console.clear()

function stacks(str) {
	if (str.length % 2 !== 0) return false

	const possible = [
		{ start: '{', end: '}' },
		{ start: '[', end: ']' },
		{ start: '(', end: ')' },
	]
	const stack = []

	for (let i = 0; i < str.length; i++) {
		if (possible.find((item) => item.start === str[i])) {
			stack.push(str[i])
			continue
		}

		if (
			possible.find(
				(item) =>
					item.end === str[i] &&
					item.start === stack[stack.length - 1]
			)
		) {
			stack.pop()
		}
	}

	return stack.length === 0 ? true : false
}

console.log(stacks('{}([])[{}]'))
console.log(stacks('{([])}'))
console.log(stacks('{[}]'))
console.log(stacks('{(])'))
console.log(stacks('{([]([]))}'))