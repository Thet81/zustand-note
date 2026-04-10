import VisibilityFilter from './components/VisibilityFilter'
import NoteList from './components/NoteList'
import {useNoteActions} from './store'
import {useEffect} from 'react'
import noteService from './services/notes'
import NoteForm from './components/NoteForm'

const App = ()=> {
  const {initialize} = useNoteActions()
  useEffect(()=> {
    noteService.getAll().then(notes => initialize(notes))
  },[initialize])
  return (
    <>
      <NoteForm/>
      <VisibilityFilter/>
      <NoteList/>
    </>
  )
}

export default App