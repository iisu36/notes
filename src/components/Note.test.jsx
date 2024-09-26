import { vi, test, expect } from 'vitest'
import { page, userEvent } from '@vitest/browser/context'
import Note from './Note'
import { render } from 'vitest-browser-react'

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true,
  }

  render(<Note note={note} />)

  const element = page.getByText(
    'Component testing is done with react-testing-library'
  )
  expect(element).toBeDefined()
})

test('clicking the button calls event handler once', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true,
  }

  const mockHandler = vi.fn()

  render(<Note note={note} toggleImportance={mockHandler} />)

  const user = userEvent.setup()
  const button = page.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})
