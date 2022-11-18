function median(arr1, arr2) {
	return [arr1 + arr2].sort((a,b) => a - b)
}

median([1,2], [3]) // 2
median([1,2], [3, 4]) // 2.5
median([1,2, 5, 2], [3, 6, 2])