
import {create} from 'zustand'

const initialNotes = [
    {
      id: 1,
      content: 'Zustand is less complex than Redux',
      important: true,
    }, {
      id: 2,
      content: 'React app benefits from custom hooks',
      important: false,
    }, {
      id: 3,
      content: 'Remember to sleep well',
      important: true,
    }
  ]

const useNoteStore = create(set => ({
	notes : initialNotes,
	filter : 'ALL',
	actions : {
		add : note => set(state => ({notes : state.notes.concat(note)})),
		toggleImportanceOf : id => set(state => ({notes : notes.map(note => note.id === id ? {...note, important : !note.important} : note)})),
		setFilter : value => set(()=>({filter : value})),
    initialize : notes => set(()=> ({notes}))
	}
}))

export const useNotes = ()=> {
  const notes = useNoteStore(state => state.notes)
  const filter = useNoteStore(state => state.filter)
  if (filter === 'important') return notes.filter(note => note.important)
  if (filter === 'nonimportant') return notes.filter(note => !note.important)
  return notes
}
export const useFilter = ()=> useNoteStore(state => state.filter)
export const useNoteActions = ()=> useNoteStore(state => state.actions)