// mockingdemo.test.js

import {expect, test, vi} from 'vitest'

test('mock function basics',()=> {
	const getApples = vi.fn()

	// Call it
	getApples()

	expect(getApples).toHaveBeenCalled()
	expect(getApples).toHaveBeenCalledTimes(1)

	// By default, a mock returns undefined
	expect(getApples()).toBeUndefined()
})


test('mock return values', () => {
  const getApples = vi.fn()

  // Always return this value
  getApples.mockReturnValue(10)
  expect(getApples()).toBe(10)

  // Return this value only once, then fall back to the default
  getApples.mockReturnValueOnce(20)
  expect(getApples()).toBe(20) // 20 (one-time)
  expect(getApples()).toBe(10) // back to default
})