
import {create} from 'zustand'
import noteService from './services/notes'

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

const useNoteStore = create((set,get) => ({
	notes : [],
	filter : 'ALL',
	actions : {
		add : async note => {
      const newNote = await noteService.createNew(note)
      set(state => ({notes : state.notes.concat(newNote)}))
    },
		// toggleImportanceOf : id => set(state => ({notes : notes.map(note => note.id === id ? {...note, important : !note.important} : note)})),
    toggleImportanceOf : async id => {
      // getState is one of zustand's helper functions
      console.log(useNoteStore.getState())
      const note = get().notes.find(n => n.id === id);
      const updated = await noteService.update(id,{...note, important : !note.important})
      set(state => ({notes : state.notes.map(n => n.id === id ? updated : n)}))
    },
		setFilter : value => set(()=>({filter : value})),
    initialize : async ()=> {
      const newNotes = await noteService.getAll()
      set(state => ({notes : newNotes}))
    }
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

export default useNoteStore;