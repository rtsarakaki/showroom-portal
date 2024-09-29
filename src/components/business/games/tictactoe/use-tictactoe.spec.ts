import { renderHook, act } from '@testing-library/react-hooks'
import { useTicTacToe } from './use-tictactoe'


const initialBoardState = [
  {
    id: 'A',
    cols: [
      { id: '1', value: '' },
      { id: '2', value: '' },
      { id: '3', value: '' }
    ]
  },
  {
    id: 'B',
    cols: [
      { id: '1', value: '' },
      { id: '2', value: '' },
      { id: '3', value: '' }
    ]
  },
  {
    id: 'C',
    cols: [
      { id: '1', value: '' },
      { id: '2', value: '' },
      { id: '3', value: '' }
    ]
  }
]

describe('useTicTacToe', () => {
  it('should initialize with an empty board', () => {
    const { result } = renderHook(() => useTicTacToe())

    expect(result.current.board).toEqual(initialBoardState)
    expect(result.current.currentPlayer).toBe('X')
    expect(result.current.error).toBeNull()
  })
  it('should change the board state when player makes his move', async () => {
    const { result, waitFor } = renderHook(() => useTicTacToe()) // ARRANGE

    const prevPlayer = result.current.currentPlayer

    act(() => {
      result.current.playerMadeHisChoice('A1');
    });

    await waitFor(() => {
      expect(result.current.currentPlayer).not.toBe(prevPlayer); // ASSERT
      expect(result.current.getBoxValue('A1')).toBe(prevPlayer); // ASSERT
    });

    act(() => {
      result.current.playerMadeHisChoice('A2');
    });

    await waitFor(() => {
      expect(result.current.currentPlayer).toBe(prevPlayer); // ASSERT
      expect(result.current.getBoxValue('A2')).not.toBe(prevPlayer); // ASSERT
    });
  })

    it('should send error if player select a box already selected', async () => {
      const { result, waitFor } = renderHook(() => useTicTacToe()) // ARRANGE

      act(() => {
        result.current.playerMadeHisChoice('A1') // ACT
      });

      await waitFor(() => {
        expect(result.current.getBoxValue('A1')).toBe('X'); // ASSERT
        expect(result.current.error).toBeNull(); // ASSERT
      });

      act(() => {
        result.current.playerMadeHisChoice('A1') // ACT
      });

      await waitFor(() => {
        expect(result.current.getBoxValue('A1')).toBe('X'); // ASSERT
        expect(result.current.error).toBe('This box is already filled.'); // ASSERT
      });

    })

    it('should reset board state', async () => {
      const { result, waitFor } = renderHook(() => useTicTacToe()) // ARRANGE

      act(() => {
        result.current.reset() // ACT
      });

      await waitFor(() => {
        expect(result.current.board).toEqual(initialBoardState) // ASSERT
        expect(result.current.currentPlayer).toBe('X') // ASSERT
        expect(result.current.error).toBeNull() // ASSERT
      });
    })
})
