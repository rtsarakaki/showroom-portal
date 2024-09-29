import { fireEvent, render, screen } from '@testing-library/react'
import Box from './box'

function renderComponent(
  borderX?: boolean,
  borderY?: boolean,
  value?: any,
  onClick?: () => string
) {
  render(
    <Box
      boxId="test"
      borderX={borderX ?? false}
      borderY={borderY ?? false}
      value={value}
      onClick={onClick}
    />
  )
}

describe('Testing Tic Tac Toe Box component', () => {
  it('should render the tic tac toe box correctly', () => {
    renderComponent() // ARRANGE
    const cardElement = screen.queryByTestId('test') // ACT
    expect(cardElement).toBeInTheDocument() // ASSERT
  })

  it('should have border x', () => {
    renderComponent(true, false) // ARRANGE
    const box = screen.queryByTestId('test') // ACT
    expect(box).toHaveClass('border-x') // ASSERT
  })

  it('should have border y', () => {
    renderComponent(false, true) // ARRANGE
    const box = screen.queryByTestId('test') // ACT
    expect(box).toHaveClass('border-y') // ASSERT
  })

  it('should have borders  x and y', () => {
    renderComponent(true, true) // ARRANGE
    const box = screen.queryByTestId('test') // ACT
    expect(box).toHaveClass('border-x border-y') // ASSERT
  })

  it('should not have borders  x and y', () => {
    renderComponent(false, false) // ARRANGE
    const box = screen.queryByTestId('test') // ACT
    expect(box).not.toHaveClass('border-x border-y') // ASSERT
  })

  it('should print the value', () => {
    renderComponent(false, false, 'X') // ARRANGE
    const box = screen.queryByText('X') // ACT
    expect(box).toBeInTheDocument() // ASSERT
  })

  it('should ignore the value', () => {
    renderComponent(false, false, 'X') // ARRANGE
    const box = screen.queryByText('XA') // ACT
    expect(box).not.toBeInTheDocument() // ASSERT
  })

  it('should return boxid when clicked', () => {
    const boxClicked = jest.fn() // Mock function to handle click

    renderComponent(false, false, '', boxClicked) // ARRANGE
    const box = screen.getByTestId('test') // ACT
    fireEvent.click(box)
    expect(boxClicked).toHaveBeenCalledWith('test') // ASSERT
  })
})
