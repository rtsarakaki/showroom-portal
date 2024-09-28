interface ComponentProps {
  boxId: string
  borderX: boolean
  borderY: boolean
  value?: '' | 'X' | 'O'
}

export default function Box({
  boxId,
  borderX,
  borderY,
  value
}: Readonly<ComponentProps>) {
  const hasBorder = borderX ?? borderY
  const classBorderX = borderX ? ' border-x border-x-black border-x-2 ' : ''
  const classBorderY = borderY ? ' border-y border-y-black border-y-2 ' : ''
  const classBorder = hasBorder ? ' border-solid ' : ''
  const classDefinition = classBorder + classBorderX + classBorderY
  const valueValidated = value === 'X' || value === 'O' ? value : ''
  return (
    <li
      data-testid={boxId}
      className={`${classDefinition} text-lg font-bold flex items-center justify-center w-20 h-20`}
    >
      {valueValidated}
    </li>
  )
}
