const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(url, method = 'GET', body = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		xhr.open(method, url)
		xhr.responseType = 'json'
		xhr.setRequestHeader('Content-Type', 'application/json')

		xhr.onload = () => {
			if (xhr.status >= 400) {
				return reject(xhr.response)
			}
			return resolve(xhr.response)
		}

		console.log(xhr)

		xhr.onerror = () => {
			reject(xhr.response)
		}

		xhr.send(JSON.stringify(body))
	})
}

// const data = {
// 	name: 'Amigo',
// 	age: 21,
// }

sendRequest(requestURL)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
