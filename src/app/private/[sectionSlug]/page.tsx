import Section from '@/components/business/section'

interface SectionParams {
  params: {
    sectionSlug: string
  }
}

export default function Page({ params }: Readonly<SectionParams>) {
  return <Section sectionSlug={params.sectionSlug} />
}
