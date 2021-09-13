import React from 'react'
import { render, screen } from '@testing-library/react'

test('aria-labelledby', () => {
  render(
    <label>
      Name: <input aria-labelledby="oops" />
    </label>,
  )
  screen.getByRole('textbox', { name: /Name/ })
  screen.getByLabelText(/Name/)
})
