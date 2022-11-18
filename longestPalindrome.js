console.clear()

var longestPalindrome = function (s) {
	if (s.length == 0) return ''
	let [max_l, offset] = [0, 1]

	for (let i = 0; i < s.length - 1; i++) {
		let [l, r] = [i, i]
		// expand to cover contiguous repeated chars...
		while (l >= 0 && r < s.length - 1 && s[l] === s[r + 1]) r += 1
		// expand around a center window (l -> r)
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			if (r + 1 - l > offset) [max_l, offset] = [l, r + 1 - l]
			l -= 1
			r += 1
		}
	}
	return s.substring(max_l, max_l + offset)
}

console.log(longestPalindrome('abscc'))
