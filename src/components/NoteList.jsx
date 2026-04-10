// NoteList.jsx
import {useNotes} from '../store'
import Note from './Note'

const NoteList = ()=> {
	const notes = useNotes()
	return (
		<div>
			{
				notes.map(note=> (
					<Note key={note.id} note={note}/>
				))
			}
		</div>
	)
}

export default NoteList