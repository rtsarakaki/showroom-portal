type componentProps = {
  condition: boolean
  children: any
}

export default function If(props: Readonly<componentProps>) {
  if (!props.condition) {
    return null
  }

  return <div>{props.children}</div>
}
