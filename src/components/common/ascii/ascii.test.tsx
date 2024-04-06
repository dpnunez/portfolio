import { expect, it, test } from 'vitest'
import { render } from '@testing-library/react'
import { ASCII } from '.'

test('Render ASCII', () => {
  const { getByText } = render(<ASCII>ascii</ASCII>)

  const element = getByText('ascii')
  expect(element).toBeTruthy()
})

it('Should accept custom className', () => {
  const { container } = render(<ASCII className="custom-class">ascii</ASCII>)

  const element = container.getElementsByClassName('custom-class')[0]
  expect(element).toBeTruthy()
})
