console.clear()
// let l1 = [9, 9, 9, 9, 9, 9, 9],
// l2 = [9, 9, 9, 9]
let l1 = [2, 4, 3],
    l2 = [5, 6, 4]

var getSideDigit = (num, last) => (last ? +(num + '').slice(-1) : +(num + '').slice(0, 1))

// add-two-numbers
var addTwoNumbers = function (l1, l2) {
    var max = l1.length > l2.length ? l1 : l2
    var maxLen = max.length
    var res = new ListNode()

    for (let i = 0; i < maxLen; i++) {
        var top = l1[i] ?? 0
        var bottom = l2[i] ?? 0
        var adding = top + bottom

        if ((adding + '').length === 2) {
            res.push(+(adding + '').slice(-1))
            max[i + 1] += +(adding + '').slice(0, 1)
            if (maxLen - 1 === i && (adding + '').length === 2) {
                res.push(+(adding + '').slice(0, 1))
            }
            continue
        }

        res.push(adding)
    }

    return res
}

// console.log(addTwoNumbers(l1, l2))

// 30. Substring with Concatenation of All Words

const permutator = (inputArr) => {
    let result = []

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            if (!result.find((item) => item === m.join(''))) {
                result.push(m.join(''))
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice()
                let next = curr.splice(i, 1)
                console.log(i)

                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result
}

var findSubstring = function (s, words) {
    const result = []
    const possibleList = permutator(words)
    let j = 0
    let i = 0
    while (i < s.length) {
        if (s.substr(i, possibleList[j].length) === possibleList[j]) {
            result.push(i)
        }

        if (i + 1 === s.length && j < possibleList.length - 1) {
            i = 0
            j++
            continue
        }
        i++
    }

    return result
}

// console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']))

// console.log(
// 	findSubstring('bcabbcaabbccacacbabccacaababcbb', [
// 		'c',
// 		'b',
// 		'a',
// 		'c',
// 		'a',
// 		'a',
// 		'a',
// 		'b',
// 		'c',
// 	])
// )

// console.log(
// 	findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])
// )

// console.log(permutator(['word', 'good', 'best', 'good']))

// 6 zigzag

const s = 'PAYPALISHIRING',
    numRows = 4
// "PINALSIGYAHRPI"

/*
[
  P       I       N  	  E
   A     L  S    I  G    D  F
	Y  A     H  R    A  C    G
	 P        I       B
]
*/

var convert = function (s, numRows) {
    const temp = []
    let count = 0
    let status = true
    for (let i = 0; i < s.length; i++) {
        if (status) {
            count += 1
            count === numRows ? (status = false) : status
        } else {
            count -= 1
        }
        console.log(count)
    }

    console.log(temp)
}

// convert(s, numRows)

/*
[
  1      7       13  	    19
   2    6  8    12  14    18  20
	3  5    9  11    15  17    21
	 4       10       16
]
*/

var maxArea = function (height) {
    let max = 0

    let start = 0
    let end = height.length - 1

    while (start < end) {
        max = Math.max((end - start) * Math.min(height[start], height[end]), max)
        height[start] < height[end] ? start++ : end--
    }

    return max
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// console.log(maxArea([4, 3, 2, 1, 4]))
// [1, 2, 3, 4]

/*
let { index, value } = {
		index: 0,
		value: arr[0],
	}

	let i = 0
	while (i < arr.length) {
		const num = arr[i + 1]
		if (arr.length - 1 === i) {
			index = index + 1
			value = arr[index]
			i = index
			continue
		}
		console.log(num)
		i++
	}
*/

// looping as nested
var loopingAsNested = function (arr) {
    let { index, value } = { index: 0, value: arr[0] }
    let i = 0

    while (i < arr.length) {
        if (arr[i] === value && i === arr.indexOf(arr[i])) {
            i++
            continue
        }
        console.log('value: ', value)
        console.log('before: ', arr[i])
        i++
        if (i === arr.length) {
            index = index + 1
            value = arr[index]
            i = index
        }
    }
}

// 12. Integer to Roman
// const cases = {
// 	1: 'I',
// 	5: 'V',
// 	10: 'X',
// 	50: 'L',
// 	100: 'C',
// 	500: 'D',
// 	1000: 'M',
// }

// function intToRoman(input) {
// 	const values = Object.values(cases)
// 	const keys = Object.keys(cases)
// 	for (let i = 0; i < values.length; i++) {
// 		console.log(values[i])
// 	}
// }

// intToRoman(4)
function convertToRoman(num) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    var str = ''

    for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i])
        num -= q * roman[i]
        str += i.repeat(q)
    }

    return str
}
console.log(convertToRoman(80))

// 17. Letter Combinations of a Phone Number

var letterCombinations = function (digits) {
    const cases = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    if (digits === 2) return console.log('Error')
    const temp = []
    const result = []
    for (let digit of digits) temp.push(cases[digit])

    console.log(temp)

    // for (let i = 1; i < temp.length; i++) {
    // 	const letter = temp[i] //
    // 	console.log('outside: ', temp[i - 1])
    // 	for (let j = 0; j < letter.length; j++) {
    // 		const char = letter[j]
    // 		console.log('insideL ', temp[i - 1][j])
    // 	}
    // }
}

// letterCombinations('23456')

// ["abc", "def"]
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// ["abc", "def", "ghi"]
// [
// "adg","adh","adi", "aeg", "aeh", "aei", "afg","afh","afi",
// "bdg","bdh","bdi", "beg", "beh", "bei", "bfg","bfh","bfi",
// "cdg","cdh","cdi", "ceg", "ceh", "cei", "cfg","cfh","cfi",
// ]

// [
// "adg","adh","adi","aeg","aeh","aei","afg","afh","afi",
// "bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi",
// "cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"
// ]

/*
	if (temp[i + 1]) {
				console.log(letter[i] + temp[i + 1][j])
			}
			if (temp.length - 1 === i) {
				// console.log(letter[i] + temp[i][j])
				console.log(char)
			}
*/

//
// /9 - 3! *
