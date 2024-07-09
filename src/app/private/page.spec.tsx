import React from 'react'
import { render, screen } from '@testing-library/react'
import PrivatePage from './page'

describe('PrivatePage', () => {
  it('should render the PrivatePage component', () => {
    render(<PrivatePage />)
    expect(screen.getByText('Private Page')).toBeInTheDocument()
  })
})
