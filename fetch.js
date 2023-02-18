console.clear()
// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// async function sendRequest(url, method, body = null) {
// 	const headers = {
// 		'Content-Type': 'application/json',
// 	}

// 	return fetch(
// 		url,
// 		body
// 			? {
// 					method: method,
// 					body: JSON.stringify(body),
// 					headers: headers,
// 			  }
// 			: null
// 	).then((response) => {
// 		return response.json()
// 	})
// }

// const data = {
// 	name: 'Amigo',
// 	age: 21,
// }

// let result = []

// sendRequest(requestURL)
// 	.then((res) => res.map((item) => result.push(item)))
// 	.catch((err) => console.log(err))

// sendRequest(requestURL, 'POST', data)
// 	.then((res) => result.push(res))
// 	.catch((err) => console.log(err))

// console.log(result)


async function firtsFunc() {
	const data1 = new Promise(resolve => setTimeout(resolve, 3000))
	const data2 = new Promise(resolve => setTimeout(resolve, 0))
	const data3 = new Promise(resolve => setTimeout(resolve, 3500))

	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const json = await res.json()

	console.log(json)
	data1.then(() => console.log(1))
	data2.then(() => console.log(2))
	data3.then(() => console.log(3))

}


firtsFunc()