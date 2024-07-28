import { getSections } from '@/graphql/sections'
import TextToSvgIcon from '../building-blocks/layout/text-to-svg-icon'

export default async function PrivateHome() {
  try {
    const sections = await getSections()
    if (sections) {
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          {sections.map((section: any, index: number) => (
            <div
              key={index}
              className="flex p-10 rounded-lg mt-10 gap-2 items-center"
            >
              <TextToSvgIcon icon={section.iconSvg} />
              <h2>{section.title}</h2>
            </div>
          ))}
        </div>
      )
    }
    return <h1>Nada a ser exibido</h1>
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
