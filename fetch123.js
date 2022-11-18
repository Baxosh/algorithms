// fetch('https://api.github.com/users/baxosh')
// 	.then((res) => res.json())
// 	.then(res => console.log(res))
// 	.catch((err) => console.log(err))

async function getUserGithub() {
	// let response = await fetch('https://api.github.com/users/baxosh')
	let response = await fetch('https://jsonplaceholder.com/posts', {
		mode: 'no-cors',
		body: response
	});
	response = await response.json();
	console.log(response);
}

getUserGithub()
