type componentProps = {
  condition: boolean
  children: any
}

export default function If(props: componentProps) {
  if (!props.condition) {
    return null
  }

  return <div>{props.children}</div>
}
