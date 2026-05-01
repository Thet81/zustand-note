// NoteForm.jsx
import {useNoteActions} from '../store'

const NoteForm = ()=> {
	const {add} = useNoteActions()
	const handleSubmit = async e => {
		e.preventDefault()
		const note = e.target.note.value;
		add(note)
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