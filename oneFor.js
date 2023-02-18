const list1 = [1, 2, 3]
const list2 = [4, 5, 6]


let i = 0
let j = 0
let res = []
while (true) {
	if (list1.length === i) break

	res.push([list1[i], list2[j]])

	if (j === list2.length - 1) {
		i++
		j = 0
		continue
	}

	j++
}

console.log(res)