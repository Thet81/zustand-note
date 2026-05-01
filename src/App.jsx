import VisibilityFilter from './components/VisibilityFilter'
import NoteList from './components/NoteList'
import {useNoteActions} from './store'
import {useEffect} from 'react'
import NoteForm from './components/NoteForm'

const App = ()=> {
  const {initialize} = useNoteActions()
  
  useEffect(()=> {
    initialize()
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