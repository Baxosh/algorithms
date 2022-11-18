console.clear()
// Object compare
function compareObj(obj, source) {
	return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
}

console.log(compareObj({ id: 1, name: 'Amigo', surname: 'Amigoyev' }, { id: 1, name: 'Amigo' },))

