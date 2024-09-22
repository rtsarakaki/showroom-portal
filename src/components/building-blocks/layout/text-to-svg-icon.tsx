interface ComponentProps {
  icon: string
  className?: string
}

export default function TextToSvgIcon({
  icon,
  className = ''
}: Readonly<ComponentProps>) {
  if (typeof icon !== 'string') {
    return <></>
  }

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: icon }}></div>
  )
}
