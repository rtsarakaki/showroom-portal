import Section from '@/components/business/section'
import { getSection } from '@/graphql/section'

interface SectionParams {
  params: {
    sectionSlug: string
  }
}

export default async function Page({ params }: Readonly<SectionParams>) {
  try {
    const section = await getSection(params.sectionSlug)
    if (section) {
      return <Section section={section} />
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
