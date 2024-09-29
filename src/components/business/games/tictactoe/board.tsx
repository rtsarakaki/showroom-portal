'use client'

import Header from '@/components/building-blocks/text/header'
import Box from './box'
import Row from './row'
import { Row as TicTacToeRow, useTicTacToe } from './use-tictactoe'

export default function Board() {
  const { board, currentPlayer, error, playerMadeHisChoice, reset } = useTicTacToe()

  const boxClicked = (boxId: string) => {
    playerMadeHisChoice(boxId)
  }

  const boardLayout = (board: TicTacToeRow[]) => {
    return board.map((row: TicTacToeRow) => {
      return (
        <Row key={row.id}>
          {row.cols.map((col) => (
            <Box
              key={`${row.id}${col.id}`}
              boxId={`${row.id}${col.id}`}
              borderY={row.id === 'B'}
              borderX={col.id === '2'}
              value={col.value}
              onClick={boxClicked}
            />
          ))}
        </Row>
      )
    })
  }

  return (
    <div>
      <Header size="2" text="Tic Tac Toe" className="mb-5 text-primary" />
      <div className="bg-gray-200 p-10 border-double border-black border-4 rounded-lg">
        {boardLayout(board)}
      </div>
      <div className="flex justify-between mt-3">
        <p className="mt-5">{`Current Player: ${currentPlayer}`}</p>
        <button className="bg-primary text-white font-bold py-2 px-4 rounded shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-75" onClick={reset}>
          Reset
        </button>
      </div>
      <p className="mt-5">{`${error ?? ''}`}</p>
    </div>
  )
}
