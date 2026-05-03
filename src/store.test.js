// store.test.js

import {describe, it, expect, beforeEach, vi} from 'vitest'
import {renderHook, act} from '@testing-library/react'

vi.mock('./services/notes',()=> ({
	default : {
		getAll : vi.fn(),
		createNew : vi.fn(),
		update : vi.fn(),
	}
}))

import noteService from './services/notes'
import useNoteStore, {useNotes, useFilter, useNoteActions} from './store.js'

beforeEach(()=> {
	useNoteStore.setState({notes : [], filter : ''})
	vi.clearAllMocks()
})

describe('useNoteActions',()=> {
	it('initialize loads notes from services', async ()=>{
		const mockNotes = [{id : 1, content : 'Test', important : false}]
		noteService.getAll.mockResolvedValue(mockNotes)

		const {result} = renderHook(()=> useNoteActions())

		await act(async ()=> {
			// we called noteService.getAll() function inside initialize function in the store
			await result.current.initialize()
		})

		const {result : noteResult} = renderHook(()=> useNotes())

		expect(noteResult.current).toEqual(mockNotes)
	})

	it('appends a new note',async ()=> {
		const newNote = {id : 2, content : 'new note', important : false}
		noteService.createNew.mockResolvedValue(newNote)

		const {result}  = renderHook(()=> useNoteActions())

		await act(async ()=> {
			await result.current.add('new note')
		})

		const {result:notesResult} = renderHook(()=> useNotes())
		expect(notesResult.current).toContainEqual(newNote)
	})

	it('toggleimportance flips the important flag',async()=> {
		const note = {id : 1, content : 'a note to be flipped its importance flag', important : false}
		useNoteStore.setState({notes : [note]})

		noteService.update.mockResolvedValue({...note, important : true})

		const {result} = renderHook(()=> useNoteActions())

		await act( async ()=> {
			await result.current.toggleImportanceOf(1)
		})

		const {result : notesResult} = renderHook(()=> useNotes())

		expect(notesResult.current[0].important).toBe(true)
	})
})

describe('usenotes filtering',()=> {
	const notes = [
		{ id : 1, content : 'A', important : true},
		{ id : 2, content : 'B', important : false}
	]

	beforeEach(()=> {
		useNoteStore.setState({notes})
	})

	it('returns all notes with no filer',()=> {
		const {result} = renderHook(()=> useNotes())
		expect(result.current).toHaveLength(2)
	})

	it('filters important notes',()=> {
		useNoteStore.setState({notes, filter : 'important'})
		const {result} = renderHook(()=> useNotes())
		expect(result.current).toEqual([notes[0]])
	})

	it('filters nonimportant notes',()=> {
		useNoteStore.setState({notes, filter : 'nonimportant'})
		const {result} = renderHook(()=> useNotes())
		expect(result.current).toEqual([notes[1]])
	})
})
