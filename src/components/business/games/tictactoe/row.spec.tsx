import { render, screen } from '@testing-library/react'
import Row from './row'

function renderComponent(borderX?: boolean, borderY?: boolean, value?: any) {
  render(
    <Row>
      <p>Children</p>
    </Row>
  )
}

describe('Testing Tic Tac Toe Box component', () => {
  it('should render the tic tac toe row correctly', () => {
    renderComponent() // ARRANGE
    const row = screen.queryByText('Children') // ACT
    expect(row).toBeInTheDocument() // ASSERT
  })
})
