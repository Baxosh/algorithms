console.clear()
// var removeDuplicates = function (nums) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = 0; j < nums.length; j++) {
// 			if (i === j) continue

// 			if (nums[j] === nums[i]) {
// 				nums.splice(i, 1)
// 			}
// 		}
// 	}
// 	return nums
// }

// var removeDuplicates = function (nums) {
// 	for (let i = 0; i < nums.length - 1; ) {
// 		if (nums[i] == nums[i + 1]) {
// 			nums.splice(i, 1)
// 		} else {
// 			i++
// 		}
// 	}
// 	console.log(nums)
// }

function removeDuplicates(nums) {
	let temp = 0,
		i = 0

	while (i < nums.length) {
		if (temp === i) {
			
		}
		if (i === nums.length - 1) {
			temp += 1
			i = 0
		}

		console.log('temp:', temp)
		console.log(i)
		i++
	}
	// return nums
}
removeDuplicates([1, 2, 3, 4])

// console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6]))
