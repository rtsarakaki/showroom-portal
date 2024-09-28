import { render, screen } from '@testing-library/react'
import Board from './board'

function renderComponent() {
  render(<Board />)
}

describe('Testing Tic Tac Toe component', () => {
  it('should render the tic tac toe correctly', () => {
    renderComponent() // ARRANGE
    const cardElement = screen.getByText('Tic Tac Toe') // ACT
    expect(cardElement).toBeInTheDocument() // ASSERT
  })

  it.each([
    ['A', '1'],
    ['A', '2'],
    ['A', '3'],
    ['B', '1'],
    ['B', '2'],
    ['B', '3'],
    ['C', '1'],
    ['C', '2'],
    ['C', '3']
  ])('should draw a matrix 3x3', (row: string, col: string) => {
    const boxId = `${row}${col}`
    renderComponent() // ARRANGE
    const box = screen.getByTestId(boxId) // ACT
    expect(box).toBeInTheDocument() // ASSERT
  })

  const noBorder = [
    [false, 'border-x'],
    [false, 'border-y']
  ]
  const borderX = [
    [true, 'border-x'],
    [false, 'border-y']
  ]
  const borderY = [
    [false, 'border-x'],
    [true, 'border-y']
  ]
  const borderXY = [
    [true, 'border-x'],
    [true, 'border-y']
  ]
  it.each([
    ['A', '1', noBorder],
    ['A', '2', borderX],
    ['A', '3', noBorder],
    ['B', '1', borderY],
    ['B', '2', borderXY],
    ['B', '3', borderY],
    ['C', '1', noBorder],
    ['C', '2', borderX],
    ['C', '3', noBorder]
  ])(
    'should draw the board lines',
    (row: string, col: string, borders: (string | boolean)[][]) => {
      const boxId = `${row}${col}`
      renderComponent() // ARRANGE
      const box = screen.getByTestId(boxId) // ACT

      borders.forEach(([shouldHaveClass, borderClass]) => {
        if (shouldHaveClass) {
          expect(box).toHaveClass(borderClass as string) // ASSERT
        } else {
          expect(box).not.toHaveClass(borderClass as string) // ASSERT
        }
      })
    }
  )
})
