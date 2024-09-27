import { test, expect } from '@playwright/test'
import { createNote } from './helper'

test.describe('Note app', () => {
  test.beforeEach(async ({ page, request }) => {
    await request.post('/api/testing/reset')

    await page.goto('')
  })

  test('front page can be opened', async ({ page }) => {
    const locator = await page.getByText('Notes', { exact: true })
    await expect(locator).toBeVisible()
    await expect(
      await page.getByText(
        'Note app, Department of Computer Science, University of Helsinki 2024'
      )
    ).toBeVisible()
  })

  test('a new note can be created', async ({ page }) => {
    await createNote(page, 'a note created by playwright', true)
    await expect(page.getByText('a note created by playwright')).toBeVisible()
  })

  test.describe('and a note exists', () => {
    test.beforeEach(async ({ page }) => {
      await createNote(page, 'first note', true)
      await createNote(page, 'second note', true)
      await createNote(page, 'third note', true)
    })

    test('importance can be changed', async ({ page }) => {
      await page.pause()
      const otherNoteText = await page.getByText('second note')

      await otherNoteText
        .getByRole('button', { name: 'make not important' })
        .click()
      await expect(otherNoteText.getByText('make important')).toBeVisible()
    })
  })
})
