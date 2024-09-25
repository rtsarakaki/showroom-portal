import Header from '../building-blocks/text/header'
import Card from './card'
import { Section as SectionType } from '@/types/section'

interface ComponentProps {
  section: SectionType
}

export default function Section({ section }: Readonly<ComponentProps>) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="my-10 w-11/12">
        <Header text={section.title} size="3" className="mb-10 mx-1" />
        <div className="flex flex-wrap">
          {section.cards?.map((card: any, index: number) => (
            <Card
              key={card.id}
              title={card.title}
              icon={card.iconSvg}
              navigateTo={card?.navigateTo ?? ''}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
