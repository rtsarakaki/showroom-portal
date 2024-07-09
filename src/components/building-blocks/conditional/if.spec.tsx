import React from 'react'
import { render, screen } from '@testing-library/react'
import If from './if'

describe('If', () => {
  it('should render children when condition is true', () => {
    render(
      <If condition={true}>
        <div>Child Component</div>
      </If>
    )
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })

  it('should not render children when condition is false', () => {
    const { container } = render(
      <If condition={false}>
        <div>Child Component</div>
      </If>
    )
    expect(container).toBeEmptyDOMElement()
  })
})
