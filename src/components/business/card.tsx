import Header from '../building-blocks/text/header'
import TextToSvgIcon from '../building-blocks/layout/text-to-svg-icon'
import Link from 'next/link'

interface ComponentProps {
  key: number
  title: string
  description: string
  icon: string
  navigateTo: string
}

export default async function Card({
  key,
  title,
  description,
  icon,
  navigateTo
}: ComponentProps) {
  return (
    <Link
      href={navigateTo || ''}
      key={key}
      className="flex flex-col w-full sm:w-6/12 md:w-4/12 lg:w-3/12"
    >
      <div className="border border-secondary-foreground rounded-sm p-5 gap-5 m-1  flex flex-col h-full">
        <div className="flex items-center gap-2">
          <TextToSvgIcon className="text-primary w-10 h-10" icon={icon} />
          <Header text={title} size="1" />
        </div>
        <p className="flex-grow">{description}</p>
      </div>
    </Link>
  )
}
