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
			await result.current.initialize()
		})

		const {result : noteResult} = renderHook(()=> useNotes())

		expect(noteResult.current).toEqual(mockNotes)
	})
})
