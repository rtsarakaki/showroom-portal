interface ComponentProps {
  icon: string
}

export default function TextToSvgIcon({ icon }: ComponentProps) {
  if (typeof icon !== 'string') {
    return <></>
  }

  return <div dangerouslySetInnerHTML={{ __html: icon }}></div>
}
