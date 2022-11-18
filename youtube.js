// var counter = (function () {
// 	var privateCounter = 0
// 	function changeBy(val) {
// 		privateCounter += val
// 	}

// 	return {
// 		increment: function () {
// 			changeBy(1)
// 		},

// 		decrement: function () {
// 			changeBy(-1)
// 		},

// 		value: function () {
// 			return privateCounter
// 		},
// 	}
// })()

// console.log(counter.value()) // 0.

// counter.increment()
// counter.increment()
// console.log(counter.value()) // 2.

// counter.decrement()
// console.log(counter.value()) // 1.

// var x = 5

// alert('x is  = ' + x + '. y is = ' + y) //result => x is = 5. y is = undefined.

// var y = 7

function main1() {
	console.log(this)
}

const main2 = () => console.log(this)
