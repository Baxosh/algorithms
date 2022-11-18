function sort(numbers) {
	for (let i = 0; i < numbers.length - 1; i++) {
		let current = numbers[i]
		let next = numbers[i + 1]

		if (current > next) {
			[numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
		}
	}
	return numbers
}

console.log(sort([555, 12, 8, 19, 55, 22]))
console.log(sort([1,6,3,1,7,5,222,0]))
// [1,8,6,2,5,4,8,3,7].sort()