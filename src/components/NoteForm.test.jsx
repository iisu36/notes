import { vi, test, expect } from 'vitest'
import NoteForm from './NoteForm'
import { page, userEvent } from '@vitest/browser/context'
import { render } from 'vitest-browser-react'

test('<NoteForm /> updates parent state and calls onSubmit', async () => {
  const user = userEvent.setup()
  const createNote = vi.fn()

  render(<NoteForm createNote={createNote} />)

  const input = page.getByRole('textbox')
  const sendButton = page.getByText('save')

  await user.type(input, 'testing a form...')
  await user.click(sendButton)

  expect(createNote.mock.calls).toHaveLength(1)
  expect(createNote.mock.calls[0][0].content).toBe('testing a form...')
})
