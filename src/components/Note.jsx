// Note.jsx
import {useNoteActions} from '../store'

const Note = ({note})=> {
	const {toggleImportanceOf} = useNoteActions()
	return (
		<li onClick={()=>toggleImportanceOf(note.id)}>{note.content}</li>
	)
}

export default Note