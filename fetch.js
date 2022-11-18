const requestURL = 'https://jsonplaceholder.typicode.com/users'

async function sendRequest(url, method, body = null) {
	const headers = {
		'Content-Type': 'application/json',
	}

	return fetch(
		url,
		body
			? {
					method: method,
					body: JSON.stringify(body),
					headers: headers,
			  }
			: null
	).then((response) => {
		return response.json()
	})
}

const data = {
	name: 'Amigo',
	age: 21,
}

let result = []

sendRequest(requestURL)
	.then((res) => res.map((item) => result.push(item)))
	.catch((err) => console.log(err))

sendRequest(requestURL, 'POST', data)
	.then((res) => result.push(res))
	.catch((err) => console.log(err))

console.log(result)
