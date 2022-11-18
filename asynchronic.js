import fetch from 'node-fetch'
console.clear()

async function fetchData() {
	console.log('first')
	// fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then((response) => response.json())
	// 	.then((response) => {
	// 		console.log({
	// 			id: response[0].id,
	// 			name: response[0].name,
	// 		})
	// 	})
	// 	.catch((err) => console.log(err))
	let response = await fetch('https://jsonplaceholder.typicode.com/users')
	response = await response.json()
	console.log(await response)
	console.log('')
}

// fetchData()
