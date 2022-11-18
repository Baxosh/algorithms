const getRandomBetween = (min, max) => {
	return min + Math.floor(Math.random() * (max - min + 1))
}

const array = Array(100)
	.fill(null)
	.map(() => getRandomBetween(-100, 100))

function customSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
				// [arr[i], arr[j]] = [arr[j], arr[i]]
			}
		}
	}
	return arr
}

let i = 0
while (i < 10) {
	console.time('customSort method')
	customSort(array) // [1,2,3,5] // [3, 5, 1]
	console.timeEnd('customSort method')
	i++
}

const sorted = array.sort((a, b) => a - b) // [1,2,3,5] // [3, 5, 1]
console.log(array)
console.log(sorted)

let j = 0
while (j < 10) {
	console.time('sort method')
	sorted
	console.timeEnd('sort method')
	j++
}

function isSorted(array) {
	for (let i = 1; i < array.length; i++) {
		if (array[i] < array[i - 1]) {
			console.log(false)
			return false
		}
	}
	console.log(true)
	return true
}
