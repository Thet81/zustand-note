// notes.js

const baseUrl = 'http://localhost:3001/notes'

const getAll = async ()=> {
	const response = await fetch(baseUrl)

	if(!response.ok) {
		throw new Error('Failed to fetch notes')
	}
	const data = await response.json()
	return data
}

const createNew = async content => {
	const config = {
		method : 'POST',
		headers : {
			'Content-type' : 'application/json'
		},
		body : JSON.stringify({content, important : false})
	}

	const response = await fetch(baseUrl,config)
	if (!response.ok) {
		throw new Error("Failed to create a new note")
	}
	return await response.json()
}

export default {getAll, createNew}