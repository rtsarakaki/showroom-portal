import { useState } from 'react'

export type TicTacToeValue = '' | 'X' | 'O'

export interface Col {
  id: string
  value: TicTacToeValue
}

export interface Row {
  id: string
  cols: Col[]
}

const generateInitialBoardState = (rows: string[], cols: string[]): Row[] => {
  return rows.map((rowId) => ({
    id: rowId,
    cols: cols.map((colId) => ({ id: colId, value: '' }))
  }))
}

const initialBoardState = generateInitialBoardState(
  ['A', 'B', 'C'],
  ['1', '2', '3']
)

export function useTicTacToe() {
  const [board, setBoard] = useState<Row[]>(initialBoardState)
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X')
  const [error, setError] = useState<string | null>(null)

  const getBoxValue = (boxId: string) => {
    const [rowId, colId] = boxId.split('')
    const rowIndex = board.findIndex((row) => row.id === rowId)
    const colIndex = board[rowIndex].cols.findIndex((col) => col.id === colId)
    return board[rowIndex].cols[colIndex].value
  }

  const setBoxValueWithCurrentPlayerSimbol = (boxId: string, value: TicTacToeValue) => {
    const [rowId, colId] = boxId.split('')
    const rowIndex = board.findIndex((row) => row.id === rowId)
    const colIndex = board[rowIndex].cols.findIndex((col) => col.id === colId)
    const newBoard = board.map((row, rIndex) =>
      rIndex === rowIndex
        ? {
            ...row,
            cols: row.cols.map((col, cIndex) =>
              cIndex === colIndex ? { ...col, value: value } : col
            )
          }
        : row
    )
    setBoard(newBoard)
  }

  const playerMadeHisChoice = (boxId: string) => {
    const currentValue = getBoxValue(boxId)

    if (currentValue) {
      setError('This box is already filled.')
      return
    }

    setBoxValueWithCurrentPlayerSimbol(boxId, currentPlayer)
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X'
    setCurrentPlayer(nextPlayer)
    setError(null)
  }

  const reset = () => {
    setBoard(initialBoardState)
    setCurrentPlayer('X')
    setError(null)
  }

  return {
    board,
    currentPlayer,
    error,
    playerMadeHisChoice,
    getBoxValue,
    reset
  }
}
