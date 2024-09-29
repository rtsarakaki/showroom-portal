import { TicTacToeValue } from './use-tictactoe'

interface ComponentProps {
  boxId: string
  borderX: boolean
  borderY: boolean
  value?: TicTacToeValue
  onClick?: (boxId: string) => void
}

export default function Box({
  boxId,
  borderX,
  borderY,
  value,
  onClick
}: Readonly<ComponentProps>) {
  const hasBorder = borderX ?? borderY
  const classBorderX = borderX ? ' border-x border-x-primary border-x-2 ' : ''
  const classBorderY = borderY ? ' border-y border-y-primary border-y-2 ' : ''
  const classBorder = hasBorder ? ' border-solid ' : ''
  const classDefinition = classBorder + classBorderX + classBorderY
  const valueValidated = value === 'X' || value === 'O' ? value : ''

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    if (onClick) {
      onClick(boxId)
    }
  }

  return (
    <li
      data-testid={boxId}
      className={`${classDefinition} text-lg font-bold flex items-center justify-center w-20 h-20`}
      onClick={handleClick}
    >
      {valueValidated}
    </li>
  )
}
