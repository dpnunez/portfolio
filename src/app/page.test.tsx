import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

test('Page', () => {
  expect(render(<Page />)).toBeDefined()

  expect(
    screen.getByRole('heading', { level: 1, name: 'dpnunez' }),
  ).toBeDefined()
})
