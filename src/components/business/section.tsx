import { getSection } from '@/graphql/section'
import TextToSvgIcon from '../building-blocks/layout/text-to-svg-icon'
import Header from '../building-blocks/text/header'
import Link from 'next/link'
import Card from './card'

interface ComponentProps {
  sectionSlug: string
}

export default async function Section({ sectionSlug }: ComponentProps) {
  try {
    const section = await getSection(sectionSlug)
    if (section) {
      return (
        <div className="w-full flex items-center justify-center">
          <div className="my-10 w-11/12">
            <Header text={section.title} size="3" className="mb-10 mx-1" />
            <div className="flex flex-wrap">
              {section.cards?.map((card: any, index: number) => (
                <Card
                  key={index}
                  title={card.title}
                  icon={card.iconSvg}
                  navigateTo={card?.navigateTo || ''}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      )
    }
    return (
      <>
        <h1>Nada a ser exibido</h1>
      </>
    )
  } catch (error: any) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1>Content Page</h1>
        <pre className="bg-slate-800 text-slate-50 p-10 rounded-lg mt-10 text-wrap">
          {JSON.stringify(error.message, null, 2)}
        </pre>
      </div>
    )
  }
}
