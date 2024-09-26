import { expect, test, describe, beforeEach } from 'vitest'
import { page, userEvent } from '@vitest/browser/context'
import { render } from 'vitest-browser-react'
import Togglable from './Togglable'

describe('<Togglable />', () => {
  let container

  beforeEach(() => {
    container = render(
      <Togglable buttonLabel="show...">
        <div className="testDiv">togglable content</div>
      </Togglable>
    ).container
  })

  test('renders its children', () => {
    page.getByText('togglable content')
  })

  test('at start the children are not displayed', async () => {
    await expect
      .element(container)
      .not.toContainHTML(
        '<div class="togglableContent">togglable content</div>'
      )
  })

  test('after clicking the button, children are displayed', async () => {
    const user = userEvent.setup()
    const button = page.getByText('show...')
    await user.click(button)

    const div = container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })

  test('toggled content can be closed', async () => {
    const user = userEvent.setup()

    const button = page.getByText('show...')
    await user.click(button)

    const closeButton = page.getByText('cancel')
    await user.click(closeButton)

    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })
})
