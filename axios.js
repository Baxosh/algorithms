const axios = require('axios').default

const posts = 'http://jsonplaceholder.typicode.com/posts'

axios
	.get(posts)
	.then((response) => console.log(response))
	.catch((err) => console.log(err))

new Promise((res, rej) => {
	setTimeout(() => res(1), 1000)
})
	.then((res) => {
		console.log(res)
		return res * 2
	})
	.then((res) => {
		console.log(res)
	})
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
	})
