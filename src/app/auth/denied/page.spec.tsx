import React from 'react'
import { render, screen } from '@testing-library/react'
import AccessDenied from './page'

describe('AccessDenied', () => {
  it('should render the AccessDenied component', () => {
    render(<AccessDenied />)
    expect(screen.getByText('Access Denied')).toBeInTheDocument()
    expect(
      screen.getByText('Sorry, access to this content is restricted.')
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Back to Home' })
    ).toBeInTheDocument()
  })
})
