// NoteForm.jsx
import noteService from '../services/notes'
import {useNoteActions} from '../store'

const NoteForm = ()=> {
	const {add} = useNoteActions()
	const handleSubmit = async e => {
		e.preventDefault()
		const note = e.target.note.value;
		const newNote = await noteService.createNew(note)
		add(newNote)
		e.target.reset()
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input name="note"/>
				<button type="submit">add</button>
			</form>
		</div>
	)
}

export default NoteForm