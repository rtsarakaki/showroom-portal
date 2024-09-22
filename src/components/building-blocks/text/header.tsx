type componentProps = {
  className?: string
  text: string
  size: '5' | '4' | '3' | '2' | '1'
}

export default function Header(props: Readonly<componentProps>) {
  return (
    <h1
      className={`${
        props.size === '1' ? '' : `text-${props.size}xl`
      } font-bold ${props.className}`}
    >
      {props.text}
    </h1>
  )
}
